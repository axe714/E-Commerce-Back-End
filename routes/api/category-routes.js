const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

//get all categories including the products under that category
router.get("/", async (req, res) => {
  try {
    const showAllCategory = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(showAllCategory);
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

//get 1 category by its category_id
router.get("/:id", async (req, res) => {
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      //we need to require the Product table to view all the products under the specific category ID
      include: [{ model: Product }],
    });
    //checks to see if the category id exists, if not, send a status 404 and its message
    if (!categoryById) {
      return res.status(404).json({
        message: `This category ID does not exist. Please enter a valid category ID!`,
      });
    }
    res.status(200).json(categoryById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//create a new category
router.post("/", async (req, res) => {
  try {
    const createCategory = await Category.create({
      //only parameter available here is the category name as the ID is auto incremented.
      category_name: req.body.category_name,
    });
    res.status(200).json(createCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update a category using its category_id
router.put("/:id", async (req, res) => {
  try {
    //where clause is needed so that it knows which category_id to edit
    const checkCategoryId = await Category.findByPk(req.params.id);
    const updateCategory = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );
    if (!checkCategoryId) {
      return res
        .status(404)
        .json({
          message: `This category ID does not exist. Please enter a valid category ID!`,
        });
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete a category using its category_id
router.delete("/:id", async (req, res) => {
  try {
    //where clause is needed so that it knows which category_id to delete
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    //error handling for when user inputs a category_id that does not exist
    if (!deletedCategory) {
      return res.status(404).json({
        message: `This category ID does not exist. Please enter a valid category ID!`,
      });
    }
    res.status(200).json(deletedCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
