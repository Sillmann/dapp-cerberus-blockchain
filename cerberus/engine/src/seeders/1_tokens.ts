import ISeeder from "./ISeeder";
import tokensRepository from "../repositories/tokensRepository";
import Config from "../config";
import { TokenData } from "../services/uniswapTypes";
import { getTokens } from "../services/uniswapService";

export class TokensSeeder implements ISeeder {
  async execute(): Promise<void> {
	console.log(`Initializing tokens seeder...`);
	
	console.log(`Cheching if the tokens already tokens...`);
	const count = await tokensRepository.countTokens(Config.NETWORK2);
	if (count > 0){
	  console.log(`The tokens already exists...exitting...`);
	}
	
	let skip : number = 0;
	let tokens : TokenData[] = [];
	
	do {
		tokens = await getTokens(skip);
		console.log(`Loaded ${tokens.length} tokens...`);
		
		for (let i=0; i < tokens.length; i++){
			const token = tokens[i];
			console.log(token.name);
			await tokensRepository.addToken({
				id: token.id,
				decimals: parseInt(token.decimals),
				name: token.name!,
				symbol: token.symbol,
				network: Config.NETWORK2
			});
		}
		
		skip += tokens.length;
		console.log(`Inserted ${tokens.length} tokens...`);
		
	}
	while(tokens.length > 0)
	
	console.log(`Finalized tokens seeder.`);
  }
}

export default new TokensSeeder().execute();