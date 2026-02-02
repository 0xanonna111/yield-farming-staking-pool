const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Mock addresses for demonstration - in production, deploy ERC20s first
  const stakingTokenAddr = "0x..."; 
  const rewardTokenAddr = "0x...";

  const StakingPool = await hre.ethers.getContractFactory("StakingPool");
  const pool = await StakingPool.deploy(stakingTokenAddr, rewardTokenAddr);

  await pool.waitForDeployment();

  console.log(`Staking Pool deployed to: ${await pool.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
