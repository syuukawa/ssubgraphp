
pragma solidity >=0.4.22 <0.7.0; 

contract Borrow { 

    event BorrowAndTrade(uint256 tokenId, uint256 price, uint256 amount, uint256 slippage, uint256 timestamp, address user); 

    function borrow () external { 
        emit BorrowAndTrade(1, 10, 2*10**18, 2, now, msg.sender); 
    } 
} 
