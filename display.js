const {Web3}=require("web3") 
const prompt=require("prompt-sync")() 
async function sendEther() 
{ 
    try { 
        const web3=new Web3("http://127.0.0.1:7545") 
        console.log("Connected to Ganache...") 
        const accounts=await web3.eth.getAccounts() 
        const sender=accounts[0] 
        const receiver=accounts[1] 
        console.log("Ganache Accounts are:\n===========") 
        for (let i = 0; i < accounts.length; i++) 
        { 
            console.log("Account-"+i+"="+accounts[i])             
        } 
        let a1=parseInt(prompt("Enter an account index to fetch balance:")) 
        if(a1<0||a1>accounts.length) 
            console.log("Invalid Index") 
        else 
        { 
            console.log("Account:"+a1+"="+accounts[a1]) 
            const sbal=await web3.eth.getBalance(accounts[a1]) 
            let ebal=web3.utils.fromWei(sbal,"ether") 
            console.log("=====\nBalance of Account-"+a1+"="+ebal+" Ethers") 
        } 
        
 
 
    } catch (error) 
    { 
        console.log("Error in Connection="+error)     
    } 
} 
sendEther() 