const dayjs = require('dayjs');
const models = require("./database/models");
const helpers = require('./utils/helpers.js');
const { authenticate } = require('./utils/authentication.js');
const { isRedeem } = require('./utils/helpers.js');

/**
 * @desc get reward by id
 * @param INTEGER id
 * @param GET
 * @return JSON - status code, json object
 */
module.exports.getReward = async event => {
  try {
    const res = await models.Reward.findByPk(event.pathParameters.id, {
      include: [
        {
          model: models.Vendor,
          as: "vendor",
          attributes: ["email", "logo", "name", "phone"],
        },
        {
          model: models.RewardType,
          as: "reward_type",
          attributes: ["name"]
        }
      ]
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(res),
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: 'Error: Could not find reward: ' + err,

    }
  }
};

/**
 * @desc get all reward
 * @param GET
 * @return JSON - status code, json object
 */
module.exports.getAllRewards = async event => {
  try {
    const res = await models.Reward.findAll({
      include: [
        {
          model: models.Vendor,
          as: "vendor",
          attributes: ["email", "logo", "name", "phone"],
        },
        {
          model: models.RewardType,
          as: "reward_type",
          attributes: ["name"]
        }
      ]
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(res),
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: 'Error: Could not find reward: ' + err
    }
  }
};

/**
 * @desc get all reward
 * @param GET
 * @return JSON - status code, json object
 */
module.exports.getAllRewardTypes = async event => {
  try {
    const res = await models.RewardType.findAll();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(res),
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: 'Error: Could not find reward type: ' + err
    }
  }
};

/**
 * @desc create new reward
 * @param POST - reward object
 * @return JSON - status code, json object
 */
module.exports.createReward = async event => {
  try {
    //post data from body
    const {
      title,
      highlight,
      description,
      website,
      imageUrl,
      locationLink,
      locationText,
      redeemStart,
      redeemEnd,
      scheduleStart,
      scheduleEnd,
      codeRequired,
      isFlashSale,
      vendorId,
      rewardTypeId } = JSON.parse(event.body);

    await models.Reward.create({
      title,
      highlight,
      description,
      website,
      imageUrl,
      locationLink,
      locationText,
      redeemStart,
      redeemEnd,
      scheduleStart,
      scheduleEnd,
      codeRequired,
      isFlashSale,
      vendorId,
      rewardTypeId
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ result: true }),
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: 'Error: Could not create new reward: ' + err
    }
  }
};

/**
 * @desc update reward
 * @param PUT - reward object
 * @return JSON - status code, json object
 */
module.exports.updateReward = async event => {
  try {
    //only extract certain variable from body
    const {
      title,
      highlight,
      description,
      website,
      imageUrl,
      locationLink,
      locationText,
      redeemStart,
      redeemEnd,
      scheduleStart,
      scheduleEnd,
      codeRequired,
      isFlashSale,
      vendorId,
      rewardTypeId,
      code,
      codeLeft } = JSON.parse(event.body);

    //id is required 
    const { id } = JSON.parse(event.body);
    if (id == undefined) {
      throw Error('id missing');
    }

    const data = {
      title,
      highlight,
      description,
      website,
      imageUrl,
      locationLink,
      locationText,
      redeemStart,
      redeemEnd,
      scheduleStart,
      scheduleEnd,
      codeRequired,
      isFlashSale,
      vendorId,
      rewardTypeId,
      code,
      codeLeft
    };

    //clean up undefined fields
    helpers.cleanUp(data);

    //update db
    await models.Reward.update(data, {
      where: {
        id: id,
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ result: true }),
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: 'Error: Could not update reward: ' + err
    }
  }
};

/**
 * @desc delete reward
 * @param DELETE - ID
 * @return JSON - status code, json object
 */
module.exports.deleteReward = async event => {
  try {

    //delete reward by id
    await models.Reward.destroy({
      where: {
        id: event.pathParameters.id,
      }
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ result: true }),
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: 'Error: Could not delete reward: ' + err
    }
  }
};

/**
 * @desc redeem reward
 * @param POST - (ID Number, Account Number)
 * @return JSON - status code, json object
 */
module.exports.redeemReward = async event => {
  try {
    //only extract certain variable from body
    const { rewardId, IDNumber, accountNumber } = JSON.parse(event.body);

    //verify user
    const user = await authenticate(IDNumber, accountNumber);
    console.log(user);
    // throw user not found.
    if (!user) {
      throw Error("user not found.");
    }

    // user already redeem
    const redeemRes = await isRedeem({ userId: user.id, rewardId });
    if (redeemRes) {
      throw Error("user already redeem this reward.");
    }

    //get reward information
    const reward = await models.Reward.findByPk(rewardId);

    // throw reward error
    if (!reward) {
      throw Error("reward not found.");
    };

    if (reward.codeLeft > 0) {
      const rewardCode = `${reward.code}${reward.codeLeft}`;
      const redeemStartAt = dayjs().format();
      const redeemEndAt = dayjs().add(1, 'hour').format();

      //create new record in redeem table
      await models.Redeem.create({
        rewardCode,
        redeemStartAt,
        redeemEndAt,
        rewardId,
        userId: user.id
      });

      //reduce codeleft
      await models.Reward.update({
        codeLeft: reward.codeLeft - 1
      }, {
        where: {
          id: rewardId
        }
      });

      //return reward code and date
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ rewardCode, redeemStartAt, redeemEndAt, rewardId, IDNumber, accountNumber }),
      }
    } else {
      throw "all reward have fully redeemed."
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: err.toString()
    }
  }
};

/**
 * @desc check is reward redeem
 * @param POST - (ID Number, Account Number, rewardId)
 * @return JSON - status code, json object
 */
module.exports.isRewardRedeem = async event => {
  try {
    //only extract certain variable from body
    const { rewardId, IDNumber, accountNumber } = JSON.parse(event.body);

    //verify user
    const user = await authenticate(IDNumber, accountNumber);
    console.log(user);
    // throw user not found.
    if (!user) {
      throw Error("user not found.");
    }

    // user already redeem
    const redeemRes = await isRedeem({ userId: user.id, rewardId });

    //return reward code and date
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(redeemRes),
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: err.toString()
    }
  }
};