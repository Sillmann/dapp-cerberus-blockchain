import dotenv from "dotenv";
dotenv.config();

const INTERVAL : number = parseInt(`${process.env.INTERVAL}`);

const NETWORK : string = `${process.env.NETWORK}`;

const EXCHANGE : string = `${process.env.EXCHANGE}`;

const DATABASE_URL : string = `${process.env.DATABASE_URL}`;

const UNISWAP_GRAPH_URL : string = `${process.env.UNISWAP_GRAPH_URL}`;

const POOL_COUNT : number = parseInt(`${process.env.POOL_COUNT}`);

export default {
	INTERVAL,
	NETWORK,
	EXCHANGE,
	DATABASE_URL,
	UNISWAP_GRAPH_URL,
	POOL_COUNT,
}