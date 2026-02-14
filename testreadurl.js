const { findUrlById } = require('./urlmodels');

const idToSearch = 'abc123';

async function run() {
  const url = await findUrlById(idToSearch);
  console.log(url);
}

run();
