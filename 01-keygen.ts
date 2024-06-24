//used in generating keypairs; public and private keypairs

import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`This is the public key: ${keypair.publicKey.toBase58()}`); // converting to base58 for human readability

console.log(`This is the private key: ${keypair.secretKey}`)