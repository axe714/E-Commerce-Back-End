const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

//finds all tags and all associated products
router.get("/", async (req, res) => {
  try {
    const showAllTags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(showAllTags);
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagsById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagsById) {
      return res.status(404).json({
        message: `This category ID does not exist. Please enter a valid category ID!`,
      });
    }
    res.status(200).json(tagsById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const createTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(createTag);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
