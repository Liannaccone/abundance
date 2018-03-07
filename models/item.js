module.exports = function(sequelize, DataTypes) {
	var Item = sequelize.define('Item', {
		name: {
			type: DataTypes.String,
			allowNull: false
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	});

	Item.associate = function(models) {
		// all items belong to a specific User
		// adding foreign key constraint so an Item cannot be created without a User
		Item.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Item;
}