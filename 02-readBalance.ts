import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl('mainnet-beta'))

const address = new PublicKey('GYgbk6BbjDhhb5SRebizv35HWz87hcD1UL1orDhx1a2E')

const balance = await connection.getBalance(address);

console.log(`Account balance: ${balance} SOL` ); // LAMPORTS; smallest unit in sol just win gwei

const solBalance = balance / LAMPORTS_PER_SOL;

console.log(`Balance converted: ${solBalance} SOL`)