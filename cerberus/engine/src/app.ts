import Config from './config';
import {Token} from 'commons/models/token';
import { getTopPools } from "./services/uniswapService";

console.log("hello cerberus");
console.log(Config.EXCHANGE);

getTopPools()
  .then(data => console.log(data))
  .catch(err => console.error(err))