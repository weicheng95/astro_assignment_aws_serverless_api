'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Vendors',
    [
      {
        email: "",
        logo: "https://d23yle2kieo2t7.cloudfront.net/prodsite/media/reward-assets/july/august/astro-rewards_toyota-edit_partner-logo_w144px-x-h144px.jpg",
        name: "UMW Toyota Motor Sdn Bhd",
        phone: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "",
        logo: "https://d23yle2kieo2t7.cloudfront.net/prodsite/media/reward-assets/july/august/astro-rewards_bussiness-talk_partner-logo_w144px-x-h144px.jpg",
        name: "Business Talk Workshop",
        phone: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  ),
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Vendors", null, {})
  }
};
