import * as express from 'express';
import * as path from 'path';
import {RegisterRoutes} from './tsoaGeneratedFiles/routes';
const app = express();
RegisterRoutes(app);
app.get('/api/swagger', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, './tsoaGeneratedFiles/swagger.json'));
});
app.listen(9000, () => console.log(`Server listening on port 9000`));