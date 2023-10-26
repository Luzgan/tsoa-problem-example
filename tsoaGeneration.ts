import * as fs from 'fs';
import {generateRoutes, generateSpec, ExtendedRoutesConfig, ExtendedSpecConfig} from 'tsoa';

(async () => {
    const entryFile = './index.ts';
    const noImplicitAdditionalProperties = 'throw-on-extras';
    const tsoaGeneratedFilesFolder = 'tsoaGeneratedFiles';
    const controllerPathGlobs = ['./src/routes/**/*Controller.ts'];

    const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());

    if (!fs.existsSync(tsoaGeneratedFilesFolder)) {
        fs.mkdirSync(tsoaGeneratedFilesFolder);
    }

    const specOptions: ExtendedSpecConfig = {
        entryFile,
        basePath: '/',
        specVersion: 3,
        version: packageJson.version,
        name: packageJson.name,
        outputDirectory: tsoaGeneratedFilesFolder,
        controllerPathGlobs,
        noImplicitAdditionalProperties,
        securityDefinitions: {
        }
    };

    const routeOptions: ExtendedRoutesConfig = {
        entryFile,
        routesDir: tsoaGeneratedFilesFolder,
        noImplicitAdditionalProperties,
        controllerPathGlobs,
        middleware: 'express'
    };

    await generateSpec(specOptions);
    await generateRoutes(routeOptions);
})();
