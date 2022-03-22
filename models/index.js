const Categorias = require('./Categorias');
const Sucos = require('./Sucos');

Sucos.belongsTo(Categorias, {foreignKey: "id_categoria"});

Categorias.hasMany(Sucos, {foreignKey: "id_categoria"});

module.exports = { Sucos, Categorias } ;