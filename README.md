TypeScript HapiJS Post JSON Demo
================================

HapiJS如何处理客户端发送过来的JSON。

```
npm install
npm run demo
```

将会启动Server:

```
Server running at: http://localhost:8000
```

客户端：

```
$ brew install httpie
$ http POST http://localhost:8000/hello name=hapijs
```

将会得到回复：

```
HTTP/1.1 200 OK
Connection: keep-alive
Date: Fri, 07 Sep 2018 12:09:56 GMT
cache-control: no-cache
content-length: 13
content-type: text/html; charset=utf-8

Hello, hapijs
```
