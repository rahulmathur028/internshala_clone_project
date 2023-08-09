const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const employeModel = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First Name is required"],
      minLength: [4, "First Name should be of 4 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is required"],
      minLength: [4, "Last Name should be of 4 characters"],
    },
    contact: {
      type: String,
      required: [true, "Contact is required"],
      maxLength: [10, "Contact must not exceed 10 character"],
      minLength: [10, "Contact should be atleast 10 character"],
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      select: false,
      maxLength: [15, "password should not exceed more than 15 characters"],
      minLength: [6, "password should have atleast 6 characters"],
      //   match:[]
    },
    resetPasswordToken: {
      type: String,
      default: "0",
    },
    organizationname: {
      type: String,
      required: [true, "Organization Name is required"],
      minLength: [4, "Organization Name should be of 4 characters"],
    },
    organizationlogo: {
      type: Object,
      default: {
        fileId: "",
        url: "https://media.istockphoto.com/id/1407691632/photo/mannequin-of-man-white-head-figure-of-man.webp?b=1&s=170667a&w=0&k=20&c=KLYJYE-vmqjiI2rGxYJkgoadBUZno4hX65GYvcvFY38=",
      },
    },
    internships: [{type: mongoose.Schema.Types.ObjectId, ref: "internship"}],
    jobs: [{type: mongoose.Schema.Types.ObjectId, ref: "job"}],
  },

  {timestamps: true}
);

employeModel.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }

  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

employeModel.methods.comparepassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

employeModel.methods.getjwttoken = function () {
  return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const Employe = mongoose.model("employe", employeModel);
module.exports = Employe;
