module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Like", {}, {
    tableName: "likes",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
    id: false
  });
};