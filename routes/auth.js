const express = require("express");
const schemas = require("../schemas/usersSchemas");
const { validateBody } = require("../middlewares");

const router = express.Router();
router.post("/register", validateBody(schemas.registerSchema));

module.exports = router;
