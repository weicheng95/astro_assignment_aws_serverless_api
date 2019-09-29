const models = require("../database/models");

/**
 * @desc verify user
 * @param STRING - IDNumber
 * @param INT - accountNumber
 * @return JSON - User object
 */
module.exports.authenticate = async (IDNumber, accountNumber = 0) => {
  try {
    console.log({IDNumber, accountNumber})
    if (IDNumber == "" || accountNumber == 0) {
      throw Error('ID Number or Account Number is invalid.');
    }

    //astro account number length must longer than 10 
    if (accountNumber.toString().length < 10) {
      throw Error('Astro Account Number length must be at least 10 characters long');
    }

    //find user from db
    const res = await models.User.findAll({
      where: {
        IDNumber: IDNumber,
        accountNumber: accountNumber
      }
    });

    //return first reuslt
    if (res.length) {
      return res[0];
    } else {
      throw Error('User not found');
    }
  } catch (err) {
    console.log({ err });
    throw err;
  }
}