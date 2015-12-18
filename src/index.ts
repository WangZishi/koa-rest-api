'use strict';

import * as http from 'http';
import * as Router from 'koa-router';

const router = new Router();

router.get("", "",async (ctx, next) => {
    await next;
})

router.get("", "", (ctx, next) => {
    return next();
})
/**
 * name
 */
export class name {
    constructor(public parameters) {}
}