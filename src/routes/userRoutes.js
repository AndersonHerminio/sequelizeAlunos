import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Não deveria existir
//router.get('/', userController.index);//Lista Usuários
//router.get('/:id', userController.show);//Lista Usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

//Em cada controller podemos ter até 5 métodos

//index ->  controller para listar todos os usuários -> GET
//store/create -> cria um novo usuário -> POST
//delete -> apaga um usuário -> DELETE
//show -> mostra um usuário -> GET
//update -> atualiza um usuário -> PATCH ou PUT
