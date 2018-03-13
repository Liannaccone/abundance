module.exports = function(sequelize, Sequelize) {
  var Post = sequelize.define("Post", {

    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1]
    }
    // author: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // }
  });

  Post.associate = function(models) {
    // a Post should belong to a user
    // A Post can't be created without the user due to the foreign key constraint
    Post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};