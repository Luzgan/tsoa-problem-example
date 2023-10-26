import {Controller, Get, Path, Response, Route, Security, Tags, Request, Query, Post, Body, Res, TsoaResponse, Put} from 'tsoa';

interface Test extends Test2<SomeOtherObject> {

}

interface Test2<SomeObjectGeneric extends SomeObject = SomeObject> extends Test3<SomeObjectGeneric>{
    test: SomeObjectGeneric;
}

interface Test3<SomeObjectGeneric2 extends SomeObject = SomeObject> {
    test2: SomeObjectGeneric2;
}

interface SomeObject {
    abc: string;
}

interface SomeOtherObject {
    abc: string;
    def: string;
}

@Tags('test')
@Route('test')
export class TestController extends Controller {
    @Get()
    public async test(): Promise<Test> {
        return {test: {abc: 'aa', def: 'aa'}, test2: {abc: 'aa', def: 'aa'}};
    }
}
