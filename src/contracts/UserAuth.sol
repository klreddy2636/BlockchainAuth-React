// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserRegistration {
    mapping(address => bool) public registeredUsers;

    event UserRegistered(address indexed user);

    modifier notRegistered() {
        require(!registeredUsers[msg.sender], "User is already registered");
        _;
    }

    function registerUser() external notRegistered {
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    function isUserRegistered(address user) external view returns (bool) {
        return registeredUsers[user];
    }
}
