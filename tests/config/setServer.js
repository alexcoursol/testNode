import supertest from 'supertest';
import app from '../../src/index';

global.testingServer = supertest(app);