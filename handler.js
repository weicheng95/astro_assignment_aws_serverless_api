'use strict';

const { getReward, getAllRewards, createReward, updateReward, deleteReward, redeemReward, getAllRewardTypes, isRewardRedeem } = require('./reward.js');
const { getVendor, getAllVendors, createVendor, updateVendor, deleteVendor } = require('./vendor.js');
const { getUploadImageLink } = require('./s3Uploader.js');

module.exports = {
  getReward,
  getAllRewards,
  createReward,
  updateReward,
  deleteReward,
  redeemReward,
  getVendor,
  getAllVendors,
  createVendor,
  updateVendor,
  deleteVendor,
  getUploadImageLink,
  getAllRewardTypes,
  isRewardRedeem,
}