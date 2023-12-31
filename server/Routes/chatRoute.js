const { createChat, findUserChats, findChats } = require("../Controllers/chatController");

const express = require('express');

const router = express.Router();

router.post("/",createChat);
router.get("/:userId",findUserChats);
router.get("/find/:firstId/:secondId",findChats);

module.exports = router;

