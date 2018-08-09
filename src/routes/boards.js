const router = require('express').Router()
const ctrl = require('../controllers/boards')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.index)
router.get('/:id', auth.isAuthorized, ctrl.plants)
router.post('/', auth.isLoggedIn, ctrl.create)
router.patch('/:id', auth.isAuthorized, ctrl.patch)
router.delete('/:id', auth.isAuthorized, ctrl.destroy)
//router.patch('/:id/:plant_id', auth.isAuthorized, ctrl.addPlant)

module.exports = router
