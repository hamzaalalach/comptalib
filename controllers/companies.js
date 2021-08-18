const Company = require('../models/Company');

exports.getCompanies = async (req, res) => {
  if (req.params.id) {
    const company = await Company.findAll({
      where: {
        id: req.params.id
      }
    });

    console.log(company);

    return res.status(200).json({
      success: true,
      data: company
    });
  }

  const companies = await Company.findAll();

  return res.status(200).json({
    success: true,
    data: companies,
    count: companies.length
  });
};

exports.createCompany = async (req, res) => {
  const company = await Company.create(req.body);

  return res.status(201).json({
    success: true,
    data: company
  });
};

exports.updateCompany = async (req, res) => {
  await Company.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  return res.status(204).end();
};

exports.deleteCompany = async (req, res) => {
  const id = req.params.id;

  await Company.destroy({
    where: {
      id
    }
  });

  return res.status(204).end();
};
