INSERT INTO public.clientes(
	nombres, apellidos, fecha_nacimiento, correo, direccion)
	VALUES ('cristian', 'sotomayor gonzales', to_date('1998-12-19', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5'),
	VALUES ('luis', 'sotomayor rivera', to_date('1950-04-24', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5'),
	VALUES ('maribel', 'gonzales reque', to_date('1945-01-16', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5'),
	VALUES ('diego', 'sotomayor gonzales', to_date('1998-12-19', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5');

INSERT INTO public.clientes(
	id_cliente, nombres, apellidos, fecha_nacimiento, correo, direccion)
	VALUES (?, 'cristian fabrizio', 'sotomayor gonzales', to_date('1998-12-19', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5');
    

INSERT INTO public.clientes(
	nombres, apellidos, fecha_nacimiento, correo, direccion)
	VALUES ('cristian', 'sotomayor gonzales', to_date('1998-12-19', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5'),
	('luis', 'sotomayor rivera', to_date('1950-04-24', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5'),
	('maribel', 'gonzales reque', to_date('1945-01-16', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5'),
	('diego', 'sotomayor gonzales', to_date('1998-12-19', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5');


INSERT INTO public.clientes(
	nombres, apellidos, fecha_nacimiento, correo, direccion)
	VALUES ('fabrizio', 'sotomayor gonzales', to_date('1998-12-19', 'YYYY-MM-DD'), 'sotomayor1913@gmail.com', 'Las Lilas mzn B lote 5');

INSERT INTO public.clientes(
	nombres, apellidos, fecha_nacimiento, correo, direccion)
	('maribel', 'gonzales reque', to_date('1945-01-16', 'YYYY-MM-DD'), 'maribel04@gmail.com', 'Las Lilas mzn B lote 5');

    
	VALUES ('luis', 'sotomayor rivera', to_date('1950-04-24', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5'),

    
    
    
	VALUES ('cristian', 'sotomayor gonzales', to_date('1998-12-19', 'YYYY-MM-DD'), 'cristiansotomayor1913@gmail.com', 'Las Lilas mzn B lote 5');

## consultas varias
select * from ventas
delete from ventas where id_productos=5 and id_cliente=1 and fecha_compra is null
select * from clientes

update ventas
   set fecha_compra = '2015-01-29'
 where id_productos=1 and id_cliente=1
  id_producto