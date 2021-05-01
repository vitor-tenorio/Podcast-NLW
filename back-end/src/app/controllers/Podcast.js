import { Router } from 'express';
import Podcast from '@/app/schemas/Podcast';
import { isValidObjectId } from 'mongoose';

const router = new Router();

const checkData = (title, members, thumbnail, description, file) => {
  if (!title) return 'O campo título é obrigatório';

  if (!members) return 'O campo membros é obrigatório';

  if (!description) return 'O campo descrição é obrigatório';

  if (!thumbnail) return 'O campo thumbnail é obrigatório';

  if (!file) return 'O campo file é obrigatório';

  return null;
};

//ver questão dos arquivos
router.post('/', (req, res) => {
  const { title, members, thumbnail, description, file } = req.body;
  //checkdata

  Podcast.create({ title, members, thumbnail, description, file })
    .then((resultado) => {
      return res.send(resultado);
    })
    .catch((err) => {
      console.error(err, 'Erro ao criar objeto');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

router.get('/', (req, res) => {
  Podcast.find()
    .then((resultado) => {
      return res.send(resultado);
    })
    .catch((err) => {
      console.error(err, 'Erro ao listar objetos');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { title, members, thumbnail, description, file } = req.body;

  if (!id) return res.status(400).send({ erro: 'ID é obrigatório' });
  if (!isValidObjectId(id))
    return res.status(400).send({ erro: 'ID inválido' });

  Podcast.findByIdAndUpdate(id, {
    title,
    members,
    thumbnail,
    description,
    file,
  })
    .then((resultado) => {
      if (resultado) return res.send(resultado);
      else return res.status(404).send({ erro: 'Objeto não encontrado' });
    })
    .catch((err) => {
      console.error(err, 'Erro ao editar o objeto');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).send({ erro: 'ID é obrigatório' });
  if (!isValidObjectId(id))
    return res.status(400).send({ erro: 'ID inválido' });

  Podcast.findByIdAndRemove(id)
    .then((resultado) => {
      if (resultado) return res.send(resultado);
      else return res.status(404).send({ erro: 'Objeto não encontrado' });
    })
    .catch((err) => {
      console.error(err, 'Erro ao remover objeto');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

export default router;
