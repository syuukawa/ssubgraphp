const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async function(deployer) {
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

//   let accounts = await web3.eth.getAccounts()
  await registry.createGravatar('Carl', 'https://thegraph.com/img/team/team_04.png', {
    from: '0xED36A54b191870B4D582D65a2902CA89DE219908',
  })
//   await registry.createGravatar('Lucas', 'https://thegraph.com/img/team/bw_Lucas.jpg', {
//     from: '0xED36A54b191870B4D582D65a2902CA89DE219908',
//   })
}

//https://ropsten.etherscan.io/tx/0xea47d66f86375b07063835a37e8bf62b019530ee42395cff09672a7e294d9a5c
