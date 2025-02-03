\c my_company

INSERT INTO department (name) 
VALUES  ('Customer_Service'),
        ('Culinary'),
        ('Hospitality'),
        ('Entertainment'),
        ('Protective_Service');


INSERT INTO role (id, title, salary, department_id )
VALUES (1, 'Cashier', 15000, 1),
        (2, 'Cook', 16000, 2),
        (3, 'Bartender', 19000, 3),
        (4, 'DJ', 20000, 4),
        (5, 'Security', 22500, 5);


INSERT INTO employee ( id, first_name , last_name ,role_id , manager_id )
        VALUES (1, 'Angelica', 'Pickles', 1, 5),
               (2, 'Chuckie', 'Finster', 2, 5),
               (3, 'Susie', 'Carmichael', 3, 5),
               (4, 'Philip', 'DeVille', 4, 5),
               (5, 'Jason', 'Bourne', 5, NULL);

    