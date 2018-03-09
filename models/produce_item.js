
module.exports = function(sequelize, Sequelize) {
	var Produce_item = sequelize.define('Produce_item', {
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
	return Produce_item;
}