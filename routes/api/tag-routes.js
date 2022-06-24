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

//find a tag and all associated products using its tag_id
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

//creates a new tag
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

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const checkTagId = await Tag.findByPk(req.params.id);
    const updateTag = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );
    if (!checkTagId) {
      return res
        .status(404)
        .json({
          message: `This tag ID does not exist. Please enter a valid tag ID!`,
        });
    }
    res.status(200).json(updateTag);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// delete a tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!deletedTag) {
      return res.status(404).json({
        message: `This tag ID does not exist. Please enter a valid tag ID!`,
      });
    }
    res.status(200).json(deletedTag);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
