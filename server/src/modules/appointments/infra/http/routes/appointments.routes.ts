import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

/* appointmentsRouter.get('/', async (request, response) => {
  const appointments = await appointmentsRepository.find();
  return response.json(appointments);
}); */

const appointmentsController = new AppointmentsController();

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
