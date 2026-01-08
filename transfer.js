const {Web3}=require("web3") 
const prompt=require("prompt-sync")() 
async function sendEther() 
{ 
    try { 
        const web3=new Web3("http://127.0.0.1:7545") 
        //await web3.eth.requestAccounts() 
        console.log("Connected to Ganache...") 
        const accounts=await web3.eth.getAccounts() 
        
        console.log("Ganache Accounts are:\n===========") 
        for (let i = 0; i < accounts.length; i++) 
        { 
            console.log("Account-"+i+"="+accounts[i])             
        } 
        let s=parseInt(prompt("Enter index of sender account:")) 
        let r=parseInt(prompt("Enter index of receiver account:")) 
        if(s<0||s>accounts.length && r<0||r>accounts.length) 
            console.log("Invalid Sender/Receiver Index entered!") 
        else 
        { 
            let sbal,rbal,sebal,rebal; 
            console.log("Before Transfer..Account Status:\n=========") 
            console.log("Sender Account:"+s+"="+accounts[s]) 
            console.log("Receiver Account:"+r+"="+accounts[r]) 
            sbal=await web3.eth.getBalance(accounts[s]) 
 
 
            rbal=await web3.eth.getBalance(accounts[r]) 
            sebal=web3.utils.fromWei(sbal,"ether") 
            rebal=web3.utils.fromWei(rbal,"ether") 
            console.log("=====\nBalance of Account-"+s+"="+sebal+" Ethers") 
            console.log("Balance of Account-"+r+"="+rebal+" Ethers") 
            let amt=parseInt(prompt("Enter amount to transfer:")) 
            const txn=await web3.eth.sendTransaction({from:accounts[s],to:accounts[r],value:web3.utils.toWei(amt,"ether")}) 
            console.log("Transaction success...Txn Hash="+txn.transactionHash) 
            console.log("=======\nAfter Transfer..Account Status:\n=========") 
            console.log("Sender Account:"+s+"="+accounts[s]) 
            console.log("Receiver Account:"+r+"="+accounts[r]) 
            sbal=await web3.eth.getBalance(accounts[s]) 
            rbal=await web3.eth.getBalance(accounts[r]) 
            sebal=web3.utils.fromWei(sbal,"ether") 
            rebal=web3.utils.fromWei(rbal,"ether") 
            console.log("=====\nBalance of Account-"+s+"="+sebal+" Ethers") 
            console.log("Balance of Account-"+r+"="+rebal+" Ethers") 
        } 
        
    } catch (error) 
    { 
        console.log("Error in Connection="+error)     
    } 
} 
sendEther()