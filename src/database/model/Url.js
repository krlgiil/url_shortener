import Sequelize from 'sequelize';

export default function SyncUrlModel(sequelize) {
  const Url = sequelize.define('url', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    expiresAt: {
      type: Sequelize.DATE,
    },
  }, {
    underscored: true,
  });

  Url.sync();

  return Url;
}
