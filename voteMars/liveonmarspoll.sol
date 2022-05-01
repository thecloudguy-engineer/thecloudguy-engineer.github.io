// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
* @title LiveOnMars
* @dev store yes or no for a question and retrieve count for yes and no
*/
contract LiveOnMars {

    uint256 public yesCount;
    uint256 public noCount;
    string public question = "Do you want to live on Mars?";

    mapping (address => bool) voteRecordForAddress;

    function recordVote(bool _answer) public{
        require(voteRecordForAddress[msg.sender]== false);
        if (_answer == true){
            yesCount++;
        }else{
            noCount++;
        }
        voteRecordForAddress[msg.sender] == true;
    }
}

