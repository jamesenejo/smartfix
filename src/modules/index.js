import webhookRouter from './webhookRouter';

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(`${apiPrefix}/webhook`, webhookRouter);
  return app;
};

export default routes;
