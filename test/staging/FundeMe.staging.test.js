const { getNamedAccounts, ethers, network } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");
const { assert, expect } = require("chai");

developmentChains.includes(network.name)
  ? describe.skip
  : describe("FundMe", async function () {
      let fundMe;
      let deployer;
      const sendValue = ethers.parseEther("0.1");
      beforeEach(async function () {
        deployer = await ethers.provider.getSigner();
        fundMe = await ethers.getContractAt(
          "FundMe",
          (
            await deployments.get("FundMe")
          ).address,
          deployer
        );
      });
      it("allows people to fund and withdraw", async function () {
        await fundMe.fund({ value: sendValue });
        await fundMe.cheaperWithdraw();
        const endingBalance = await ethers.provider.getBalance(fundMe.target);
        assert.equal(endingBalance.toString(), "0");
      });
    });
