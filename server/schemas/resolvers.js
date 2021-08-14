const { AuthenticationError } = require("apollo-server-express");
const { User, Campaign } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // .populate(Campaign)
    Query: {
      users: async () => {
        return User.find();
      },
      getSingleUser: async (parent, { username }) => {
        return User.findOne({ username });
      },
  
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError("You need to be logged in!");
      },
      getCampaigns: async () => {
        return Campaign.find();
      },
      getSingleCampaign: async (parent, { _id }) => {
        return Campaign.findOne({ _id });
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
    addCampaign: async (parent, { title, description, fundsNeeded }, context) => {
      console.log(context);
      if (context.user) { 
        const campaign = new Campaign ({ title, description, fundsNeeded });

        await User.findByIdAndUpdate(
          {_id: context.user._id}, 
          {$push: { bucketList: campaign } },
          {new: true}
          );
        
      return campaign
      }
        //throw new AuthenticationError('Not logged in');  
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
    }
  },
};

module.exports = resolvers;
