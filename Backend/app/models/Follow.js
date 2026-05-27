module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Follow", {}, {
    tableName: "seguidores",    // nome da tua tabela
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
    id: false
  });
};