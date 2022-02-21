'use strict'
const server = require('../server.js');

const supertest1 = require('supertest');


const request = supertest1(server.myapp);

describe('testing the server',()=>{
    it('testing home route /',async()=>{
        const res = await request.get('/');
        expect(res.text).toEqual('This is The Home page');
        expect(res.status).toEqual(200);
    })
    it('testing data route /data', async()=>{
        const res = await request.get('/data');
        expect(typeof res.body).toEqual('object');
        expect(res.status).toEqual(200);
        expect(res.body.Name).toEqual('Ibrahim');
        expect(res.body.email).toEqual('alaqoulibrahim@gmail.com')
    })
    it('testing the error code /*' , async()=>{
        const res = await request.get('/*');
        expect(res.status).toEqual(404)
    })
})