const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContractAt("FundMe", deployer);
  console.log("withdrawing from contract");
  const transactionResponse = fundMe.withdraw();
  await transactionResponse;
  console.log("Got it back");
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
