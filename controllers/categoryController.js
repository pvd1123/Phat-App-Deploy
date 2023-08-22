const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

const createCategory = async (req, res)=>{
    try {
        const { name } = req.body;
        if (!name) {
          return res.status(401).send({ message: "Điền Tên" });
        }
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
          return res.status(200).send({
            success: true,
            message: "Category đã tồn tại",
          });
        }
        const category = await new categoryModel({
          name,
          slug: slugify(name),
        }).save();
        res.status(201).send({
          success: true,
          message: "Đã thêm Category thành công",
          category,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          errro,
          message: "Lỗi",
        });
      }
}

const updateCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const category = await categoryModel.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "Cập nhật Category thành công",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Cập Nhật Lỗi",
      });
    }
  };
  
  // get all cat
const getAllCategory = async (req, res) => {
    try {
      const category = await categoryModel.find({});
      res.status(200).send({
        success: true,
        message: "Danh Sách Tất Cả Category",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Lỗi",
      });
    }
  };
  
  // get a category
const singleCategory = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Lấy Thành Công",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Xảy Ra Lỗi",
      });
    }
  };
  
  //delete category
const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Xóa Category thành công",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Lỗi trong khi xóa Category",
        error,
      });
    }
  };



module.exports = {createCategory, updateCategory, getAllCategory, singleCategory, deleteCategory}