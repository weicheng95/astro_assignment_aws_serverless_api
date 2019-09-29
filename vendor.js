const models = require("./database/models");
const helpers = require('./utils/helpers.js');

/**
 * @desc get vendor by id
 * @param INTEGER id
 * @param GET
 * @return JSON - status code, json object
 */
module.exports.getVendor = async event => {
  try {

    const res = await models.Vendor.findByPk(event.pathParameters.id);

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
      body: 'Error: Could not find vendor: ' + err
    }
  }
};

/**
 * @desc get all vendor
 * @param GET
 * @return JSON - status code, json object
 */
module.exports.getAllVendors = async event => {
  try {
    const res = await models.Vendor.findAll();

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
      body: 'Error: Could not find vendor: ' + err
    }
  }
};

/**
 * @desc create new vendor
 * @param POST - vendor object
 * @return JSON - status code, json object
 */
module.exports.createVendor = async event => {
  try {
    //post data from body
    const {
      email,
      logo,
      name,
      phone } = JSON.parse(event.body);

    await models.Vendor.create({
      email,
      logo,
      name,
      phone
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
      body: 'Error: Could not create new vendor: ' + err
    }
  }
};

/**
 * @desc update vendor
 * @param PUT - vendor object
 * @return JSON - status code, json object
 */
module.exports.updateVendor = async event => {
  try {

    //only extract certain variable from body
    const {
      email,
      logo,
      name,
      phone } = JSON.parse(event.body);

    //id is required 
    const { id } = JSON.parse(event.body);
    if (id == undefined) {
      throw Error('id missing');
    }

    //assign to new variable
    const data = {
      email,
      logo,
      name,
      phone
    };

    //clean up undefined fields
    helpers.cleanUp(data);

    //update db
    await models.Vendor.update(data, {
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
      body: 'Error: Could not update vendor: ' + err
    }
  }
};

/**
 * @desc delete vendor
 * @param DELETE - ID
 * @return JSON - status code, json object
 */
module.exports.deleteVendor = async event => {
  try {

    //delete vendor by id
    await models.Vendor.destroy({
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
      body: 'Error: Could not delete vendor: ' + err
    }
  }
};
