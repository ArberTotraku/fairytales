import express from "express";

import {
    addUser,getAllUsers,getUserByEmail
} from "../controller/userController.js"

const router =express.Router()

router.get('/',getAllUsers)
router.get('/:email',getUserByEmail);
router.post('/',addUser)

export default router