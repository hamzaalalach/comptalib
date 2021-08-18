const User = require('../models/User');

exports.getUsers = async (req, res) => {
  if (req.params.id) {
    const user = await User.findAll({
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({
      success: true,
      data: user
    });
  }

  const users = await User.findAll();

  return res.status(200).json({
    success: true,
    data: users,
    count: users.length
  });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);

  return res.status(201).json({
    success: true,
    data: user
  });
};

exports.updateUser = async (req, res) => {
  await User.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  return res.status(204).end();
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  await User.destroy({
    where: {
      id
    }
  });

  return res.status(204).end();
};
