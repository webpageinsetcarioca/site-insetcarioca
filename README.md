# Insetcarioca - Controle de Pragas (Clone Completo)

Cópia fiel, otimizada, moderna e 100% autossuficiente do website oficial da [Insetcarioca](https://insetcarioca.com.br/).

---

## 🚀 Visão Geral do Projeto

Este projeto foi recriado com foco em:
- **Zero Dependências de CMS/PHP:** Livre de erros de execução do WordPress/Elementor que existiam no site original.
- **Carregamento Instantâneo:** Todos os assets (imagens, logotipos, fontes e estilos) estão estruturados localmente.
- **Design Responsivo Moderno:** Totalmente adaptado para computadores, tablets e smartphones (drawer de menu lateral com acordeom nos menus suspensos).
- **Integração com WhatsApp:** Botão flutuante, chamadas para ação em todas as páginas e formulário de contato dinâmico que direciona a mensagem formatada para o WhatsApp comercial da Insetcarioca.

---

## 📁 Estrutura de Arquivos

```text
Site Insetcarioca/
│
├── index.html                   # Página inicial completa (Hero, Serviços, Sobre, Clientes, CTA, Rodapé)
├── quem-somos.html              # Página Quem Somos (História, Missão, Visão, Certificações INEA/ANVISA)
├── condominios.html             # Áreas > Condomínios (Soluções prediais e controle preventivo)
├── empresas.html                # Áreas > Empresas (Atendimento corporativo e indústrias)
├── residencias.html             # Áreas > Residências (Dedetização doméstica segura para pets e crianças)
├── dedetizacao.html             # Serviços > Dedetização (Metodologias e equipamentos modernos)
├── higienizacao.html            # Serviços > Higienização de Reservatórios (NR-33, NR-35 e laudos)
├── controle-ambiental.html      # Serviços > Controle Ambiental (Paisagismo, Laudo de Água e Entulho)
├── dedetizacao-de-insetos.html  # Pragas > Insetos (Baratas, Cupins, Formigas, Aranhas, Percevejos)
├── dedetizacao-de-ratos.html    # Pragas > Ratos (Desratização, Ratazanas, Porta-iscas com chave)
├── contato.html                 # Página de Contato (Formulário, canais diretos e mapa interativo)
│
├── assets/
│   ├── css/
│   │   └── style.css            # Folha de estilos unificada e responsiva
│   ├── js/
│   │   └── main.js              # Interações (Menu mobile, Accordion, Sticky Header, Formulário)
│   └── img/                     # 35 imagens oficiais baixadas e organizadas localmente
│       ├── logo-branco.png
│       ├── logo-color.png
│       ├── banner-home.jpg
│       ├── banner-mobile.png
│       ├── cliente-*.png        # Logotipos de clientes (SESC, MegaMatte, Crefisa, etc.)
│       └── praga-*.jpg/.png     # Imagens de pragas e equipes de campo
│
└── scripts/
    ├── download_assets.mjs      # Script utilitário para download dos assets
    └── verify_site.mjs          # Script de validação de integridade de links e imagens
```

---

## 🛠️ Como Executar

Para visualizar o site:
1. Abra qualquer arquivo `.html` (por exemplo, `index.html`) diretamente no seu navegador de preferência (Google Chrome, Firefox, Edge, etc.); ou
2. Utilize uma extensão como o **Live Server** no VS Code; ou
3. Execute um servidor HTTP local simples com Node.js ou Python:
   ```bash
   # Com Python:
   python -m http.server 8080

   # Com Node (npx serve):
   npx serve .
   ```

---

## 📞 Informações de Contato da Empresa

- **Telefone Comercial:** (21) 3451-5577
- **WhatsApp Oficial:** (21) 96423-5463
- **E-mail:** insetcarioca@gmail.com
- **Endereço:** Rua Praia de Inhaúma 73, Bonsucesso - Rio de Janeiro/RJ - CEP: 21042-130
- **Licenciamentos:** INEA e Produtos Autorizados ANVISA

