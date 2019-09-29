// This is the function you will need in your Lambda to make the backend work.
// Follow along in the tutorial to see how to set this up.

const uuidv4 = require('uuid/v4')
const AWS = require('aws-sdk')
AWS.config.update({ region: process.env.REGION || "ap-southeast-1" })
const s3 = new AWS.S3();

const uploadBucket = "astro-assignment-assets";

module.exports.getUploadImageLink = async event => {
  try {
    //post data from body
    const { filename } = JSON.parse(event.body);

    //generate random uuid
    let actionId = uuidv4();

    var s3Params = {
      Bucket: uploadBucket,
      Key: `${filename}-${actionId}.jpg`,
      ContentType: 'image/jpeg',
      ACL: 'bucket-owner-full-control',
      Expires: 60 * 60
    };

    // Get signed URL
    let uploadURL = s3.getSignedUrl('putObject', s3Params);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        "uploadURL": uploadURL,
        "fileName": `${filename}-${actionId}.jpg`,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Error: Could not create new reward: ' + err,
    }
  }
};


// (async () => {
//   console.log(await getUploadURL('tes'));
// })()