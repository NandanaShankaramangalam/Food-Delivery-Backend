const insertOrganizationData = `
INSERT INTO organization (name) VALUES
('Italian Delight'),
('Mexican Fiesta'),
('Asian Fusion'),
('BBQ Grill'),
('Mediterranean Cuisine'),
('Veggie Heaven'),
('Sushi House'),
('Burger Joint'),
('Pizza Paradise'),
('Seafood Sensation');
`;

const insertItemData = `
INSERT INTO item (type, description) VALUES
('perishable', 'Fresh produce'),
('non-perishable', 'Canned goods'),
('perishable', 'Fresh fruits'),
('non-perishable', 'Snacks'),
('perishable', 'Dairy products'),
('non-perishable', 'Cereals'),
('perishable', 'Fresh vegetables'),
('non-perishable', 'Packaged snacks'),
('perishable', 'Meat and poultry'),
('non-perishable', 'Canned food');
`;

const insertPricingData = `
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
(001, 1, 'central', 5, 2, 10),
(001, 2, 'central', 5, 1, 10),
(002, 1, 'central', 5, 2, 15),
(004, 5, 'north', 5, 2, 12),
(004, 6, 'south', 5, 1, 10),
(004, 7, 'north', 5, 2, 15),
(006, 5, 'south', 5, 2, 12),
(006, 6, 'north', 5, 1, 10),
(006, 7, 'south', 5, 2, 15),
(006, 8, 'south', 5, 2, 12),
(006, 7, 'north', 5, 2, 15),
(006, 8, 'north', 5, 2, 12);
`;
module.exports = { insertOrganizationData, insertItemData, insertPricingData };
