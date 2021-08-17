const { AuthenticationError } = require("apollo-server-express");
const { User, Campaign } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // .populate(Campaign)
    Query: {
      users: async () => {
        return User.find();
      },
      getSingleUser: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
      
  
      me: async (parent, args, context) => {

        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError("You need to be logged in!");
      },
      getCampaigns: async (parent, { username }) => {
        const params = username ? { username } : {}
        return Campaign.find(params);
      },
      getSingleCampaign: async (parent, { campaignId }) => {
        return Campaign.findOne({ _id: campaignId });
      },
    },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args)
      const user = await User.create(args);
      console.log(user)
      const token = signToken(user);
      console.log(token)
      return { token, user };
    },
    
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // do we need a user context if block to be logged in?
    addCampaign: async (parent, { title, description, fundsNeeded, long, lat }, context) => {
      console.log(context);
      if (context.user) { 
        const campaign = await Campaign.create({
          title, 
          description,
          fundsNeeded,
          long,
          lat,
          user: context.user

        });
        console.log(campaign)
        await User.findByIdAndUpdate(
          {_id: context.user._id}, 
          {$push: { bucketList: campaign._id } },
          {new: true}
          );
        
      return campaign
      }
        throw new AuthenticationError('Not logged in');  
    },
    updateCampaign: async (parent, {campaignId, content}) => {
      return Campaign.findByIdAndUpdate(
        {_id: campaignId},
        {
          $push: { updates: {
            content
          } }
        }
      , {new: true});
    },
    removeCampaign: async (parent, { campaignId }, context) => {
      console.log( campaignId )
      if (context.user) {
        return Campaign.findOneAndDelete({ _id: campaignId })
         
       }
    
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
