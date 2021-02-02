
pragma solidity >=0.4.22 <0.7.0; 

contract Borrow { 

    event BorrowAndTrade(uint256 tokenId, uint256 price, uint256 amount, uint256 slippage, uint256 timestamp, address user); 

    //event Order(address[] tokenPairs, string orderType, string direction, uint256 pay, uint256 borrow, uint256 interest, string status, uint256 timestamp, address user);

    event CreateOrder(address[] tokenPairs, string orderType, string direction, uint256 pay, uint256 borrow, string status);
        
    function borrow () external { 
        emit BorrowAndTrade(1, 10, 2*10**18, 2, now, msg.sender); 
    } 

    function createOrder (address[] tokenPairs, string orderType, string direction, uint256 pay, uint256 borrow, string status) external { 
        
        //InternalCompilerError: Stack too deep, try removing local variables.
        //参数太多异常
        // WETH：0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
        emit  CreateOrder(tokenPairs, orderType, direction, pay, borrow, status);
    }
    
} 
