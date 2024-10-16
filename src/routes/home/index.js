"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//라우팅: 브라우저가 요청한 경로로 이동해줌
router.get("/", ctrl.home); //루트경로로 요청이 들어오면

router.get("/login", ctrl.login);

//외부파일에서 사용할 수 있도록 밖으로 내보내기
module.exports = router;
