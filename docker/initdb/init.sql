CREATE TABLE IF NOT EXISTS company (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    price NUMERIC(10,2) NOT NULL
);

-- Inserindo 7 empresas reais
INSERT INTO company (name) VALUES
('Natura'),
('Ambev'),
('Vale'),
('Petrobras'),
('Magazine Luiza'),
('Itaú Unibanco'),
('BRF');

-- Inserindo 30 produtos reais
INSERT INTO product (name, price) VALUES
('Shampoo Natura Tododia', 25.90),
('Cerveja Skol 350ml', 3.50),
('Minério de Ferro Vale 1kg', 120.00),
('Gasolina Petrobras 1 litro', 6.80),
('Smart TV Samsung 43"', 1599.00),
('Cartão Itaú Platinum', 0.00),
('Frango Sadia 1kg', 15.50),
('Sabonete Natura Ekos', 8.90),
('Refrigerante Guaraná Antarctica 2L', 7.99),
('Arroz Tio João 5kg', 22.00),
('Notebook Dell Inspiron', 3200.00),
('Café Pilão 500g', 12.00),
('Smartphone Motorola Moto G', 1400.00),
('Leite Integral Italac 1L', 4.99),
('Azeite Gallo 500ml', 28.50),
('Amaciante Downy 2L', 18.00),
('Biscoito Bauducco Recheado', 6.50),
('Molho de Tomate Fugini 340g', 5.90),
('Papel Higiênico Neve 12 rolos', 21.00),
('Cerveja Brahma 350ml', 3.30),
('Sabão em Pó Omo 2kg', 29.90),
('Chocolate Lacta Ao Leite 90g', 7.20),
('Caixa de Leite Moça 395g', 6.50),
('Óleo de Soja Soya 900ml', 7.80),
('Detergente Ypê 500ml', 3.50),
('Bebida Energética Red Bull 250ml', 8.90),
('Açúcar Refinado União 1kg', 4.80),
('Farinha de Trigo Dona Benta 1kg', 6.20),
('Sabonete Lux 85g', 3.90),
('Queijo Mussarela Tirolez 500g', 22.00);
