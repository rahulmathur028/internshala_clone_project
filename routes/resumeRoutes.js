const express = require("express");
const router = express.Router();
const {
  resume,
  addeducation,
  editeducation,
  deleteeducation,
  addjob,
  editjob,
  deletejob,
  addintern,
  editintern,
  deleteintern,
  addresp,
  editresp,
  deleteresp,
  addcours,
  editcours,
  deletecours,
  addproj,
  editproj,
  deleteproj,
  addskil,
  editskil,
  deleteskil,
  addacomp,
  editacomp,
  deleteacomp,
} = require("../controllers/resumeController");
const {isAuthenticated} = require("../middlewares/auth");

// GET
router.get("/", isAuthenticated, resume);

//-------------------------EDUCATION----------------------------

// POST
router.post("/add-edu", isAuthenticated, addeducation);

// POST
router.post("/edit-edu/:eduid", isAuthenticated, editeducation);

// POST
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation);

//-------------------------JOB----------------------------

// POST
router.post("/add-job", isAuthenticated, addjob);

// POST
router.post("/edit-job/:jobid", isAuthenticated, editjob);

// POST
router.post("/delete-job/:jobid", isAuthenticated, deletejob);

//-------------------------INTERNSHIPS----------------------------

// POST
router.post("/add-intern", isAuthenticated, addintern);

// POST
router.post("/edit-intern/:internid", isAuthenticated, editintern);

// POST
router.post("/delete-intern/:internid", isAuthenticated, deleteintern);

//-------------------------RESPONSIBILITIES----------------------------

// POST
router.post("/add-resp", isAuthenticated, addresp);

// POST
router.post("/edit-resp/:respid", isAuthenticated, editresp);

// POST
router.post("/delete-resp/:respid", isAuthenticated, deleteresp);

//-------------------------COURSES----------------------------

// POST
router.post("/add-cours", isAuthenticated, addcours);

// POST
router.post("/edit-cours/:coursid", isAuthenticated, editcours);

// POST
router.post("/delete-cours/:coursid", isAuthenticated, deletecours);

//-------------------------PROJECTS----------------------------

// POST
router.post("/add-proj", isAuthenticated, addproj);

// POST
router.post("/edit-proj/:projid", isAuthenticated, editproj);

// POST
router.post("/delete-proj/:projid", isAuthenticated, deleteproj);

//-------------------------SKILLS----------------------------

// POST
router.post("/add-skil", isAuthenticated, addskil);

// POST
router.post("/edit-skil/:skilid", isAuthenticated, editskil);

// POST
router.post("/delete-skil/:skilid", isAuthenticated, deleteskil);

//-------------------------ACCOMPLISHMENTS----------------------------

// POST
router.post("/add-acomp", isAuthenticated, addacomp);

// POST
router.post("/edit-acomp/:acompid", isAuthenticated, editacomp);

// POST
router.post("/delete-acomp/:acompid", isAuthenticated, deleteacomp);

module.exports = router;
