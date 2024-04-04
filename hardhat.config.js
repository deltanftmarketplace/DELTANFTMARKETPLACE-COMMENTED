require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
   networks: {
     hardhat: {},
     polygon_mumbai: {
       url: "https://polygon-mumbai.g.alchemy.com/v2/KLWgsHr62YjVYwOToBVOINW_vqjLaZQv",
       accounts: [
        `0x${"f2498ee9ba3da558e2708dbc2eb785358766b5728c0e20cba5842cf8abb84982"}`
      ],
     },
   },
};
