import app from './config/express';
import vars from './config/vars';
import './config/mongoose';

const { port, env } = vars;

app.listen(port, () => console.log(`server started on port ${port} (${env})`));
