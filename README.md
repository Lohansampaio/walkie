# Walkie Love

MVP de um walkie-talkie mobile para duas pessoas, feito como PWA com WebRTC via PeerJS.

## V0.2

- Nome e inicial da outra pessoa na sala.
- Aviso visual e vibração quando a outra pessoa começa a falar.
- Reconexão automática mais clara.
- Cache do aplicativo para carregamento rápido e instalação como PWA.

## Eventos beta

Além do modo privado para duas pessoas, há um piloto para pequenas equipes. O responsável cadastra o evento e até seis participantes, recebe um link individual para cada codinome e envia os convites. Cada participante entra diretamente na equipe pelo seu link.

O piloto usa uma malha WebRTC direta entre os aparelhos. Para equipes maiores ou uso profissional, a próxima arquitetura deve usar um servidor SFU dedicado.

## Como usar

1. Abra o site em dois celulares e permita o acesso ao microfone.
2. No primeiro, use `lohan` como seu código e `amor` como o código da outra pessoa.
3. No segundo, inverta os códigos.
4. Toque em **Entrar** e mantenha **Segure para falar** pressionado enquanto fala.

O acesso precisa ser feito por HTTPS (por exemplo, usando GitHub Pages). Para instalar no iPhone, abra no Safari e escolha **Compartilhar → Adicionar à Tela de Início**.

## Limitações do MVP

- Usa o servidor público de sinalização do PeerJS, adequado para protótipos.
- Funciona melhor com a página aberta; o navegador pode suspender áudio em segundo plano ou com a tela bloqueada.
- Algumas redes restritivas podem exigir um servidor TURN próprio para completar a conexão WebRTC.

## Publicação no GitHub Pages

Em **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.

O repositório também pode ser conectado à Vercel; cada alteração enviada à `main` gera uma nova publicação automaticamente.

