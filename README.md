# CODIFY

Responsivo em mobile, tablet e desktop.

Como testar rapidamente:

- Abra `index.html` no navegador.
- Use o modo responsivo do DevTools (Ctrl+Shift+M no Chrome/Edge) e verifique em 480px, 768px e 1024px.

Principais ajustes feitos:

- Tipografia fluida com `clamp(...)` para títulos e textos.
- Mídia fluida (`img`, `video`, `iframe`) com `max-width: 100%`.
- Formulários com largura 100% e container limitado no contato.
- Seções lado a lado (Home, Sobre, Contato) passam a coluna no mobile.
- Cards e listas (Valores, Serviços, Portfólio) com `flex-wrap` e largura total no mobile.
