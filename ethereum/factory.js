import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(compiledFactory.interface), 
   '0x464105E8a371d7cEC88257E609Bf4886772093fF'
   );

export default instance;