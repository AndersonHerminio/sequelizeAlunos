import User from '../models/User';

//store/create -> cria um novo usuário -> POST
class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  //index ->  controller para listar todos os usuários -> GET
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });//attributes fazendo isso escondemos o created e updated, token
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  //show -> mostra um usuário -> GET
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  //update -> atualiza um usuário -> PATCH ou PUT
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  //delete -> apaga um usuário -> DELETE
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UserController();
