module.exports = function(sequelize, DataTypes) {
	var Reply = sequelize.define('Reply', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		}	
	});

	Reply.associate = function(models) {
		Reply.belongsTo(models.Post, {
			foreignKey: {
				allowNull: false
			}
		})
		Reply.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Reply
}