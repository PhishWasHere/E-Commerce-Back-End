const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const data = await Tag.findAll().catch((err) => {
    res.json(err);
  });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const data = await ProductTag.findByPk(req.params.id).catch((err) => {
    res.json(err);
  });
  res.json(data);
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const data = await ProductTag.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(data);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const data = await ProductTag.update(req.body);
    {

    },
    {
      where: {
        id: req.params.id,
      },
    },
    // 200 status code means the request is successful
    res.status(200).json(userData);
  }; catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const data = await ProductTag.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(data);
}); 

module.exports = router;
