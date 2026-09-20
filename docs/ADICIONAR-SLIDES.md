# Como adicionar ou trocar slides

Os PDFs do portfólio ficam em `public/media/slides/` e as capas geradas ficam em `public/media/covers/`.

## Passo a passo

1. Salve o PDF em `public/media/slides/` usando exatamente o nome esperado na tabela abaixo.
2. Confira ou edite os metadados em `src/lib/data/slides.ts`: título, categoria, descrição, caminho do PDF, caminho da capa e `featured`.
3. Gere a capa da primeira página com:

```bash
npm run slides:covers
```

4. O script cria arquivos `.webp` em `public/media/covers/` com largura máxima aproximada de 1200px.
5. Se o PDF ainda não existir, o card aparece no site como `Em breve` e não cria link quebrado.
6. Se a capa ainda não existir, o card mostra um placeholder visual até o script ser executado.

## Por que `pdf-to-img` + `@napi-rs/canvas`

O script usa `pdf-to-img` para renderizar a primeira página do PDF e `@napi-rs/canvas` para redimensionar e gerar a imagem WebP em Node.js. Essa escolha evita depender de binários externos como Poppler ou ImageMagick, o que tende a funcionar melhor em Windows, Mac e Linux.

## Slides atuais

| Slide | PDF esperado | Capa esperada | Status neste projeto |
| --- | --- | --- | --- |
| Metodologia 5S | `public/media/slides/metodologia-5s.pdf` | `public/media/covers/metodologia-5s.webp` | PDF copiado de `public/images/slides/5s.pdf` |
| Como antidepressivos são usados na VET | `public/media/slides/antidepressivos-na-vet.pdf` | `public/media/covers/antidepressivos-na-vet.webp` | PDF copiado de `public/images/slides/ANTIDEPRESSIVO.pdf` |
| Sarcoma Fusocelular | `public/media/slides/sarcoma-fusocelular.pdf` | `public/media/covers/sarcoma-fusocelular.webp` | PDF copiado de `public/images/slides/Sarcoma.pdf` |
| Ética da Complexidade | `public/media/slides/etica-da-complexidade.pdf` | `public/media/covers/etica-da-complexidade.webp` | PDF copiado de `public/images/slides/ética.pdf` |
| Plante e Floresça! | `public/media/slides/plante-e-floresca.pdf` | `public/media/covers/plante-e-floresca.webp` | PDF copiado de `public/images/slides/planteFloreca.pdf` |

## Foto da Laura

A foto principal esperada no hero é `public/media/photo/laura.jpg`. Enquanto o arquivo não existir, o site mostra um placeholder com as iniciais `LT`.
