# Interestelar

Landing page desenvolvida para o Projeto 4, módulo 21 do curso de Engenharia Front-End da EBAC.

## Recursos

- Hero com imagem do filme, trailer oficial e chamadas para ação.
- História, conteúdo em abas, opções para assistir e ficha técnica.
- Seção de dispositivos, perguntas frequentes e rodapé.
- Layout responsivo, navegação por teclado, menu móvel e preferência por movimento reduzido.
- Fontes Avenir locais, Sass dividido em módulos e classes BEM.
- Gulp para compilar e comprimir CSS/JavaScript e converter imagens para WebP.

## Executar

Requer Node.js 22 ou superior e npm. Para a prévia local, requer Python 3.

```sh
npm ci
npm run build
npm run preview
```

Abra http://localhost:4173. Para recompilar os arquivos ao editar, execute `npm run dev` em outro terminal.

`src/` contém os arquivos de desenvolvimento. `dist/` contém a página pronta para publicação.

## Publicação na Vercel

Importe o repositório, selecione o preset **Other** e use:

- Comando de build: `npm run build`
- Diretório de saída: `dist`

As opções estão registradas em `vercel.json`. Novos commits na branch principal geram uma atualização da publicação vinculada.

## Referências e materiais

- [Projeto de referência do módulo](https://github.com/ogiansouza/clone_disneyplus)
- [Legendary Pictures — filme e imagens](https://www.legendary.com/film/interstellar/)
- [Paramount Pictures — ficha do filme e pôster](https://www.paramountpictures.com/movies/interstellar)
- [Trailer oficial — Warner Bros. UK & Ireland](https://www.youtube.com/watch?v=zSWdZVtXT7E)
- Fontes Avenir e ilustrações de dispositivos: material de apoio fornecido no curso.

Página educacional não oficial, sem fins comerciais. Os materiais visuais e os nomes do filme pertencem aos respectivos titulares. Os links de disponibilidade consultam serviços externos; esta página não vende assinaturas.
