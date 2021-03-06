module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        name_product: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        photo_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_ad: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('now')
        },
        // update_ad: {
        //     type: DataTypes.DATE,
        //     defaultValue: sequelize.fn('now')
        // }
    }, {
        tableName: 'product',
        timestamps: false
    });

    const User = sequelize.import('./User.js');


    Product.belongsTo(User, {foreignKey: 'user_id'});


    return Product;
};
