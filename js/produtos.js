const produtos = [
  {
    id_produto: 1,
    descricao_produto: "Arroz Tipo 1 5kg",
    caminho_da_imagem: "../imagens/produtos/arroz-5kg.jpg",
    valor_unitario: 29.90,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 2,
    descricao_produto: "Feijão Carioca 1kg",
    caminho_da_imagem: "../imagens/produtos/feijao-carioca-1kg.jpg",
    valor_unitario: 8.49,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 3,
    descricao_produto: "Macarrão Espaguete 500g",
    caminho_da_imagem: "../imagens/produtos/macarrao-espaguete-500g.jpg",
    valor_unitario: 5.49,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 4,
    descricao_produto: "Óleo de Soja 900ml",
    caminho_da_imagem: "../imagens/produtos/oleo-soja-900ml.jpg",
    valor_unitario: 7.99,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 5,
    descricao_produto: "Açúcar Cristal 5kg",
    caminho_da_imagem: "../imagens/produtos/acucar-5kg.jpg",
    valor_unitario: 21.90,
    id_secao: 1,
    nome_secao: "Mercearia"
  },
  {
    id_produto: 6,
    descricao_produto: "Leite Integral 1L",
    caminho_da_imagem: "../imagens/produtos/leite-integral-1l.jpg",
    valor_unitario: 5.79,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 7,
    descricao_produto: "Queijo Mussarela 500g",
    caminho_da_imagem: "../imagens/produtos/mussarela-500g.jpg",
    valor_unitario: 24.90,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 8,
    descricao_produto: "Manteiga com Sal 200g",
    caminho_da_imagem: "../imagens/produtos/manteiga-200g.jpg",
    valor_unitario: 11.90,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 9,
    descricao_produto: "Iogurte Natural 170g",
    caminho_da_imagem: "../imagens/produtos/iogurte-natural-170g.jpg",
    valor_unitario: 3.99,
    id_secao: 2,
    nome_secao: "Laticínios"
  },
  {
    id_produto: 10,
    descricao_produto: "Refrigerante Cola 2L",
    caminho_da_imagem: "../imagens/produtos/refrigerante-cola-2l.jpg",
    valor_unitario: 9.99,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 11,
    descricao_produto: "Água Mineral 1,5L",
    caminho_da_imagem: "../imagens/produtos/agua-mineral-1-5l.jpg",
    valor_unitario: 3.29,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 12,
    descricao_produto: "Suco de Uva 1L",
    caminho_da_imagem: "../imagens/produtos/suco-uva-1l.jpg",
    valor_unitario: 8.99,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 13,
    descricao_produto: "Café Torrado e Moído 500g",
    caminho_da_imagem: "../imagens/produtos/cafe-500g.jpg",
    valor_unitario: 18.90,
    id_secao: 3,
    nome_secao: "Bebidas"
  },
  {
    id_produto: 14,
    descricao_produto: "Detergente Líquido 500ml",
    caminho_da_imagem: "../imagens/produtos/detergente-500ml.jpg",
    valor_unitario: 2.99,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 15,
    descricao_produto: "Sabão em Pó 1kg",
    caminho_da_imagem: "../imagens/produtos/sabao-po-1kg.jpg",
    valor_unitario: 14.90,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 16,
    descricao_produto: "Água Sanitária 2L",
    caminho_da_imagem: "../imagens/produtos/agua-sanitaria-2l.jpg",
    valor_unitario: 6.49,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 17,
    descricao_produto: "Esponja Multiuso",
    caminho_da_imagem: "../imagens/produtos/esponja-multiuso.jpg",
    valor_unitario: 2.49,
    id_secao: 4,
    nome_secao: "Limpeza"
  },
  {
    id_produto: 18,
    descricao_produto: "Sabonete 90g",
    caminho_da_imagem: "../imagens/produtos/sabonete-90g.jpg",
    valor_unitario: 2.79,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 19,
    descricao_produto: "Shampoo 350ml",
    caminho_da_imagem: "../imagens/produtos/shampoo-350ml.jpg",
    valor_unitario: 16.90,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 20,
    descricao_produto: "Creme Dental 90g",
    caminho_da_imagem: "../imagens/produtos/creme-dental-90g.jpg",
    valor_unitario: 5.99,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 21,
    descricao_produto: "Papel Higiênico 12 Rolos",
    caminho_da_imagem: "../imagens/produtos/papel-higienico-12-rolos.jpg",
    valor_unitario: 22.90,
    id_secao: 5,
    nome_secao: "Higiene"
  },
  {
    id_produto: 22,
    descricao_produto: "Chocolate ao Leite 90g",
    caminho_da_imagem: "../imagens/produtos/chocolate-90g.jpg",
    valor_unitario: 6.99,
    id_secao: 6,
    nome_secao: "Bomboniere"
  },
  {
    id_produto: 23,
    descricao_produto: "Biscoito Recheado 140g",
    caminho_da_imagem: "../imagens/produtos/biscoito-recheado-140g.jpg",
    valor_unitario: 3.99,
    id_secao: 6,
    nome_secao: "Bomboniere"
  },
  {
    id_produto: 24,
    descricao_produto: "Amendoim Torrado 200g",
    caminho_da_imagem: "../imagens/produtos/amendoim-200g.jpg",
    valor_unitario: 7.49,
    id_secao: 6,
    nome_secao: "Bomboniere"
  },
  {
    id_produto: 25,
    descricao_produto: "Balas Sortidas 100g",
    caminho_da_imagem: "../imagens/produtos/balas-sortidas-100g.jpg",
    valor_unitario: 4.99,
    id_secao: 6,
    nome_secao: "Bomboniere"
  }
];

export{produtos}