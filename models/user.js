module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			isEmail: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			len: [8]
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	User.associate = function(models) {
		// associating User with Items
		// Whemn a User is deleted, delete any associate Users
		User.hasMany(models.Item, {
			onDelete: 'cascade'
		});
	};
	return User
}