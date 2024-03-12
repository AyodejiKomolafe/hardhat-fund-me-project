const {getNamedAccounts, ethers} = require("hardhat");

async function main() {
    const {deployer} = await getNamedAccounts();
    const fundMe = await ethers.getContractAt("FundMe", deployer);
    console.log("funding contract...");
    const transactionResponse = fundMe.fund({value: ethers.parseEther("0.1")});
    // await transactionResponse;
    console.log("funded")
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
