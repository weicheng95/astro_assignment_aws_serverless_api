const models = require("../database/models");

module.exports.cleanUp = (obj) => {
  for (var propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
}

module.exports.isRedeem = async (data) => {
  try{
    const { userId, rewardId } = data;
    console.log(userId, rewardId);
    if(!userId || !rewardId) {
      throw Error("parameter is invalid.");
    }
    //find redeem from db
    const res = await models.Redeem.findAll({
      where: {
        userId: userId,
        rewardId: rewardId
      },
      attributes: ['id', 'rewardId', 'redeemStartAt', 'redeemEndAt', 'rewardCode'],
    });
     //return first reuslt
    return res[0];
  }catch(err) {
    throw err;
  }
}

(async() => {
  const res = await this.isRedeem({
    userId: 1,
    rewardId: 2
  });
  console.log(res);
})();