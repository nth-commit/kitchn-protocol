// SPDX-License-Identifier: GNU GPLv3
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

uint256 constant MAX_SUPPLY = 21_000_000;

contract Async is ERC20 {
    constructor(address seedAccount) ERC20("Async", "ASYNC") {
        _mint(seedAccount, MAX_SUPPLY);
    }
}
