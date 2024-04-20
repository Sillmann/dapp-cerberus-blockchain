import connect from "./db";
import Config from "../config";
import { ChainId } from "commons/models/chainId";
import Pool from "commons/models/pool";
import { Exchange } from "commons/models/exchange";

async function countPools(exchange: Exchange, network: ChainId): Promise<number> {
  const db = await connect();
  const count = await db.pools.count({
    where: { network, exchange }
  });
  return count;
}

async function getPool(id: string) : Promise<Pool | null> {
  const db = await connect();
  const pool = await db.pools.findUnique({
    where: {id}
  });
  return pool;  
}

async function addPool(pool: Pool): Promise<Pool> {
  const db = await connect();
  
  const newPool = await db.pools.create({
    data: pool
  })
  return newPool;
}

export default {
  countPools,
  getPool,
  addPool
}
