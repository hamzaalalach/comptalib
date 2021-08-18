const { getCompanies, createCompany, deleteCompany, updateCompany } = require('../controllers/companies');

const router = require('express').Router();

router.get('/', getCompanies);
router.get('/:id', getCompanies);
router.post('/', createCompany);
router.delete('/:id', deleteCompany);
router.patch('/:id', updateCompany);

module.exports = router;
