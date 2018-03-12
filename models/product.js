
module.exports = function(sequelize, Sequelize) {
	var Product = sequelize.define('Product', {
		item_name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		photo_url: {
			type: Sequelize.STRING,
			allowNull: false
		},
		category: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});
 	Product.associate = function(models) {
		// associating User with Items
		// Whemn a User is deleted, delete any associate Users
		Product.hasMany(models.Useritem, {
			onDelete: 'cascade'
		});
	};
	return Product;
}