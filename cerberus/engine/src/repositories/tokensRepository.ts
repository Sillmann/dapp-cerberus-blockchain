import connect from "./db";
import Config from "../config";
import {Token} from "commons/models/token";
import { ChainId } from "commons/models/chainId";

async function countTokens(network: ChainId): Promise<number> {
  const db = await connect();
  const count = await db.tokens.count({
    where: { network }
  });
  return count;  
}

async function getToken(id: string) : Promise<Token | null> {
  const db = await connect();
  const token = await db.tokens.findUnique({
    where: { id }
  });
  return token;  
}  

async function addToken(token: Token): Promise<Token> {
  if (!token.id) throw new Error(`Invalid token!`);
  const db = await connect();
  const newToken = await db.tokens.create({
    data: token
  })
  return newToken;  
}

export default {
  countTokens,
  getToken,
  addToken
} 