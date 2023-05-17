const fs = require('fs').promises;

const path = require('path');
const talkerFile = path.resolve(__dirname, '../talker.json')

const readTalkerList = async () => {
    const talkerData = await fs.readFile(talkerFile, 'utf-8');
    return JSON.parse(talkerData);
};

const readTalker = async (id) => {
    const talkerData = await fs.readFile(talkerFile);
    const talkerList = JSON.parse(talkerData);
    const talker = talkerList.find((eachTalker) => eachTalker.id === Number(id));
    if (!talker) throw new Error('Pessoa palestrante não encontrada');
    return talker;
};

module.exports = { readTalkerList, readTalker };

