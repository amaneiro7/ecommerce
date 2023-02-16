import {createApp} from './app'
import { config } from './config';

async function main() {
  
  const app = await createApp()
  app.listen(config.PORT, () => {
    console.log(`Servidor escuchando en ${config.PORT}`);
  });
}
main()



