import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import 'dotenv/config'

const keypair = process.env.KEYPAIR || null;


if (!keypair) {
    console.log('No keypair found in the configuration');
    process.exit(1);
    
}

console.log(keypair);

const connection = new Connection(clusterApiUrl('mainnet-beta'))

const keypairr = getKeypairFromEnvironment('KEYPAIR');

console.log(keypairr);

const balance = await connection.getBalance(keypairr.publicKey);

const solBalance = balance / LAMPORTS_PER_SOL;

console.log(`Balance of ${keypairr.publicKey} converted: ${solBalance} SOL`)