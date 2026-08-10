const handler = require('./api/menu.js');

function mockReqRes(query, headers) {
  const req = { method: 'GET', query: query || {}, headers: Object.assign({ host: 'grabbit-menus.vercel.app' }, headers) };
  const res = {
    _status: 200,
    _headers: {},
    setHeader(k, v) { this._headers[k] = v; },
    status(code) { this._status = code; return this; },
    json(obj) { this._body = obj; this._log(); },
    send(text) { this._body = text; this._log(); },
    end() { this._log(); },
    _log() {
      console.log('STATUS:', this._status);
      console.log('CONTENT-TYPE:', this._headers['Content-Type']);
      if (typeof this._body === 'string') {
        console.log(this._body.slice(0, 800));
      } else if (this._body) {
        console.log(JSON.stringify(this._body, null, 2).slice(0, 2500));
      }
    }
  };
  return { req, res };
}

console.log('=== full JSON ===');
{ const { req, res } = mockReqRes(); handler(req, res); }

console.log('\n=== single venue by id ===');
{ const { req, res } = mockReqRes({ id: 'sushi-park' }); handler(req, res); }

console.log('\n=== markdown format ===');
{ const { req, res } = mockReqRes({ format: 'markdown', category: 'indian' }); handler(req, res); }

console.log('\n=== unknown id ===');
{ const { req, res } = mockReqRes({ id: 'nope' }); handler(req, res); }
