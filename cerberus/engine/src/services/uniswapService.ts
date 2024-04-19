import axios from "axios";
import Config from "../config";
import { PoolData } from "./uniswapTypes";

export async function getTopPools(count: number = 20, skip: number = 0) : Promise<PoolData[]>{
  const query = `
    {
	  	pools(first: ${count}, skip: ${skip}, orderBy: volumeUSD, orderDirection: desc)
			{
				id,
				volumeUSD,
				feeTier,
				token0Price,
				token1Price,
				token0 {
					symbol,
					id,
					decimals
				}  
				token1 {
					symbol,
					id,
					decimals
				}  
			}
    }
  `;
  
  const {data} = await axios.post(Config.UNISWAP_GRAPH_URL, { query });
  console.log(data);
  return data.data ? data.data.pools as PoolData[] : [];
}
