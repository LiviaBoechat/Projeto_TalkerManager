const fs = require('fs').promises;

const path = require('path');

const talkerFile = path.resolve(__dirname, '../talker.json');

const readTalkerByName = async (name) => {
    const talkerData = await fs.readFile(talkerFile, 'utf-8');
    const talkerList = JSON.parse(talkerData);
    // console.log(talkerList);
    const talker = talkerList.filter((eachTalker) => {
        const search = eachTalker.name;
        return search.includes(name);
    });
    console.log('aqui', talker);

    return talker;
  };

const readTalkerList = async () => {
    const talkerData = await fs.readFile(talkerFile, 'utf-8');
    return JSON.parse(talkerData);
};

const readTalkerById = async (id) => {
    const talkerData = await fs.readFile(talkerFile, 'utf-8');
    const talkerList = JSON.parse(talkerData);
    const talker = talkerList.find((eachTalker) => eachTalker.id === Number(id));
    if (!talker) throw new Error('Pessoa palestrante não encontrada');
    return talker;
};

const writeTalker = async (talker) => {
    const talkerData = await fs.readFile(talkerFile, 'utf-8');
    const talkerList = JSON.parse(talkerData);    
    talkerList.push(talker);   
    await fs.writeFile(talkerFile, JSON.stringify(talkerList));
};

const deleteTalker = async (talkerList) => {    
    await fs.writeFile(talkerFile, JSON.stringify(talkerList));
};

module.exports = { readTalkerList, readTalkerById, writeTalker, deleteTalker, readTalkerByName };