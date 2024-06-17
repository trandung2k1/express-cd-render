const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const router = Router();

router.get('/', (req, res) => {
    const users = [];
    return res.status(StatusCodes.OK).json(users);
});
module.exports = router;
