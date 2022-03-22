import chai from 'chai';

import * as td from 'testdouble';
global.td = td;

export const mochaHooks = {
  afterEach() {
    td.reset();
  }
};