const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const router = Router();

router.get('/', (req, res) => {
    const users = [
        { id: 1, name: 'DungTran' },
        { id: 2, name: 'Mai' },
    ];
    return res.status(StatusCodes.OK).json(users);
});
module.exports = router;
