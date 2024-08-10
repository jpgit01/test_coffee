# test_coffee

Proyecto que testea 4 aspectos:

    √ REQ 1:  GET / cafes | retorna statuscode 200 y 1 array con minimo 1 elemento  (48 ms)
    √ REQ 2:  DELETE /cafes/:id | retornar 404 cuando el id no existe (10 ms)
    √ REQ 3: POST /cafes | retorna 201 al crear un nuevo cafe (35 ms)
    √ REQ 4: PUT / cafes/:id | retorna 400 al intentar actualizar un cafe donde el params id no corresponda al payload id (9 ms)