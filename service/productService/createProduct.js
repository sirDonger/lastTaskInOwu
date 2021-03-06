const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = async productObject => {
    const ProductModel = db.getModel(DB_TABLE_ENUM.PRODUCT);
    console.log(productObject);

    try {
        return await ProductModel.create(productObject);
    } catch (e) {
        console.log(e);
    }
};
