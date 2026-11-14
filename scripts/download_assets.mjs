import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../assets/img');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const assets = [
  { name: 'logo-branco.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/logoinsetcarioca_branco_pequeno.png' },
  { name: 'logo-color.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/logoinsetcarioca-300x181.png' },
  { name: 'favicon-150.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/Insetcarioca_Icon_Square-150x150.png' },
  { name: 'favicon-300.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/Insetcarioca_Icon_Square-300x300.png' },
  { name: 'banner-home.jpg', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/08/banner2-EDT_Easy-Resize.com_.jpg' },
  { name: 'banner-mobile.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/banner1.png' },
  { name: 'bg-por-que-escolher.jpg', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/594683510714-1024x682-1.jpg' },
  { name: 'bg-cta-azul.jpg', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/08/insetcarioca_azul_small.jpg' },
  { name: 'sobre-carro.jpg', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/08/insetcarioca_original_dedetiza%C3%A7%C3%A3o_horiz_menor-300x203.jpg' },
  { name: 'servico-alimenticio.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca-dedetiza%C3%A7%C3%A3o_BLUE2.png' },
  { name: 'servico-empresarial.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca_dedetiza%C3%A7%C3%A3o_empresarial.png' },
  { name: 'servico-condominios.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca_dedetiza%C3%A7%C3%A3o_condom%C3%ADnio2.png' },
  { name: 'servico-residencias.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca_dedetiza%C3%A7%C3%A3o_casa-1.png' },
  { name: 'servico-reservatorios.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/proj-InsetCarioca-higieniza%C3%A7%C3%A3o-de-reservatorios.png' },
  { name: 'servico-controle-ambiental.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca-higienizacao_controle.png' },
  { name: 'cliente-crefisa.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/logocrefisa-insetcarioca2.png' },
  { name: 'cliente-lenny.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/cliente_lenny-niemeyer-insetcarioca-2.png' },
  { name: 'cliente-megamatte.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/megamatte-insetcarioca-cliente2.png' },
  { name: 'cliente-cadeg.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/cadeg-insetcarioca2.png' },
  { name: 'cliente-barraday.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/barraday-insetcarioca-1.png' },
  { name: 'cliente-sesc.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/logo-sesc-insetcarioca-1.png' },
  { name: 'cliente-transamerica.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/transamericabarrahotel-insetcarioca-1.png' },
  { name: 'cliente-sushirao.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/insetcarioca-sushirao.png' },
  { name: 'cliente-jacques-janine.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/logo-jacques-janine-insetcarioca.png' },
  { name: 'cliente-cto.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/cto-traumato-insetcarioca-cliente2-1.png' },
  { name: 'condominio-crianca.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/Insetcarioca_crian%C3%A7a-dedetiza%C3%A7%C3%A3o.png' },
  { name: 'familia-casa.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/familia-em-casa-InsetCarioca-dedetiza%C3%A7%C3%A3o.png' },
  { name: 'coleta-entulho.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca-coleta_de_entulho_rio_de_janeiro-1.png' },
  { name: 'banner-dedetizacao-rj.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca-dedetiza%C3%A7%C3%A3o-RIODEJANEIRO.png' },
  { name: 'lixo-acumulado.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca_lixo_acumulado_condom%C3%ADnio_dedetiza%C3%A7%C3%A3o.png' },
  { name: 'reservatorio-equipe1.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca-higieniza%C3%A7%C3%A3o-de-reservatorios_equipe.png' },
  { name: 'reservatorio-equipe2.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/InsetCarioca-higieniza%C3%A7%C3%A3o-de-reservatorios_equipe2-1.png' },
  { name: 'praga-barata.jpg', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/barata_dedetiza%C3%A7%C3%A3o_riodejaneiro_rj.jpg' },
  { name: 'praga-cupim.png', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/cupim_dedetiza%C3%A7%C3%A3o_riodejaneiro_rj-1000.png' },
  { name: 'praga-ratos.jpg', url: 'https://insetcarioca.com.br/wp-content/uploads/2020/07/ratos_dedetiza%C3%A7%C3%A3o_riodejaneiro.jpg' }
];

async function download() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const item of assets) {
    const dest = path.join(outDir, item.name);
    try {
      console.log(`Fetching: ${item.name}`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${item.name}: ${res.status} ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${item.name} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('Finished downloads.');
}

download();

