import { Router } from 'express';
import appointmentsRoutes from './appointments.routes';
import UsersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', UsersRouter);

export default routes;
