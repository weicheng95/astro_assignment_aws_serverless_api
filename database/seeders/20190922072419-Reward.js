'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Rewards',
    [
      {
        title: "Get RM1,000 cashback* when you purchase your dream car",
        highlight: "Hurry and get your dream car now in the forms of C-HR, CAMRY & RUSH.",
        description: "<ul><li>Kindly&nbsp;present&nbsp;Astro&nbsp;physical&nbsp;bill&nbsp;statement&nbsp;or e-billing&nbsp;at any TOYOTA showroom in Malaysia for this&nbsp;promotion.</li><li>RM100 mystery gift for all Astro customers for purchasing following Toyota car models during promotion period 15th August 2019 to 15th October 2019</li><li>a) TOYOTA CAMRY</li><li>b) TOYOTA CH-R</li><li>c) TOYOTA RUSH</li><li>Only successful purchaser&#39;s are entitle to redeem RM100 mystery gift from Toyota Malaysia. Successful refer to car registered with official car ownership document. Mystery gift will be hand out to customers together with collection of new car.</li><li>RM1000 cashback for first 50 Astro customers purchasing following Toyota car models during promotion period 15th August 2019 to 15th October 2019</li><li>&nbsp;a) TOYOTA CAMRY - First 50 Astro customers only</li><li>&nbsp;b) TOYOTA CH-R - First 50 Astro customers only</li><li>&nbsp;c) TOYOTA RUSH - First 50 Astro customers only</li><li>Only successful purchaser&#39;s are entitle to redeem RM1000&nbsp; cashback from Astro. Successful refer to car registered with official car ownership document. RM1000 will be bank in to customers bank account directly. Submit the following scan documents to redeem at askrewards@astro.com.my:</li><li>a) Car purchase receipt</li><li>b) Car registration card</li><li>c) Bank account name, account number and name. Account holder name must be same as car purchaser name.</li><li>This offer is only valid for all Astro Customers. Kindly present your Astro latest month physical bill statement or e-billing at any TOYOTA showroom in Malaysia. Purchasers name must be the same on Astro bill statement.</li><li>Not valid with other promotions, offers or discounts.</li><li>UMW Toyota Motor and Astro malaysia reserves the rights to change the terms and conditions without prior notice.</li></ul>",
        website: "https://www.toyota.com.my",
        imageUrl: "https://d23yle2kieo2t7.cloudfront.net/prodsite/media/reward-assets/july/august/revised_astro-rewards_toyota-revised_astro-reward-website-w680px-x-h380px.jpg",
        locationLink: "https://www.toyota.com.my/aftersales-services/service-locator",
        locationText: "All Toyota Showroom",
        redeemStart: "2019-08-15T09:16:51",
        redeemEnd: "2019-10-15T23:59:59",
        scheduleStart: "2019-08-15T07:17:28",
        scheduleEnd: "2019-10-15T23:59:59",
        codeRequired: false,
        isFlashSale: false,
        vendorId: 1,
        rewardTypeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Exclusive business tips @ Business Talk Workshop 2019",
        highlight: "Learn the latest business trends, brand marketing & digital transformation",
        description: "<ul><li>Kindly&nbsp;prepare&nbsp;your&nbsp;Astro&nbsp;account&nbsp;number and Astro&nbsp;account holder&#39;s IC number&nbsp;before&nbsp;clicking&nbsp;the &#39;Redeem&#39; button</li><li>Enter promotion&nbsp;code&nbsp;in the TICKET2U page&nbsp;to receive&nbsp;discount&nbsp;on your ticket.</li><li>By purchasing event tickets with TICKET2U, you (the Purchaser) agree to be bound by the Terms &amp; Conditions of sale specified here in ticket2u.com.my and any other provisions as may be specified from time to time.</li><li>Each event tickets is entitled for ONE attendee. Duplicate etries will not be entertained.</li><li>Ticket purchased cannot e transferred and strictly not refundable.</li><li>Organizer reserves the right to make changes to the information without notification.</li><li>Kindly present the printed ticket or online e-ticket QR code for verification purpose upon registration on the event day.</li></ul>",
        website: "https://www.ticket2u.com.my/event/15199/“数造品牌-营创未来”-astro《企业大联盟》工作坊-2019",
        imageUrl: "https://d23yle2kieo2t7.cloudfront.net/prodsite/media/reward-assets/july/august/astro-rewards_bussiness-talk_astro-reward-website-w680px-x-h380px_1.jpg",
        locationLink: "",
        locationText: "",
        redeemStart: "2019-09-04T23:33:23",
        redeemEnd: "2019-10-03T23:20:18",
        scheduleStart: "2019-09-04T23:33:25",
        scheduleEnd: "2019-10-03T23:20:22",
        codeRequired: true,
        isFlashSale: false,
        vendorId: 2,
        rewardTypeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Rewards", null, {})
  }
};
