# Yield Farming Staking Pool

This repository provides an expert implementation of a reward-distribution staking pool. It is designed for projects looking to incentivize liquidity or long-term holding by distributing a secondary "Reward Token" to stakers of a "Staking Token."

### Core Features
* **Time-Based Rewards:** Rewards are calculated per second based on a fixed reward rate.
* **Fair Distribution:** Users earn rewards proportional to their share of the total staked amount.
* **Security:** Implements the `ReentrancyGuard` and `Ownable` patterns from OpenZeppelin.
* **Flat Structure:** Optimized for copy-pasting, with all logic in the root directory.

### Quick Start
1. Install dependencies: `npm install`
2. Deploy the tokens and the Staking contract using `deploy.js`.
3. Transfer reward tokens to the Staking contract to fund the pool.
4. Users call `stake(amount)` to begin earning.
