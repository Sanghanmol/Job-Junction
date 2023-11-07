import express from "express";
import {
  createJobController,
  deleteJobController,
  getAllJobsController,
  jobStatsController,
  updateJobController,
} from "../controllers/jobsController.js";
import userAuth from "../middelwares/authMiddleware.js";

const router = express.Router();

//routes
// CREATE JOB
router.post("/create-job", userAuth, createJobController);

//GET JOBS
router.get("/get-job", userAuth, getAllJobsController);

//UPDATE JOBS
router.patch("/update-job/:id", userAuth, updateJobController);

//DELETE JOBS
router.delete("/delete-job/:id", userAuth, deleteJobController);

// JOBS STATS FILTER
router.get("/job-stats", userAuth, jobStatsController);

export default router;
