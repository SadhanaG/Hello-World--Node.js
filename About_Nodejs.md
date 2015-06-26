What is Node.js?
---------------
Node.js is a platform built on the Google v8, JavaScript engine that allows us to write fast, scalable applications powered by JavaScript on the server.

```
libuv + v8 + js, c++ = Node.js
```

- **libuv** is a high performance, cross domain platform evented I/O library.
- **v8** is a Google's Javascript engine.
- **js, c++** custom is use to develop Nodejs platform itself.
___

### Node is Asynchronous
- The most important thing when learning Node is that it is **asynchronous** (as JavaScript always run in a single thread).

```
fs.writeFile('somefile.txt', 'Hello World, function (error)
{console.log("Function ran asynchronously")});'

```

- When a web request comes in it is passed off to as **asynchronous callback handler** and free up the main thread allowing the next process to happen.

```
fs.writeFileSync('somefile.txt','Hello World');
console.log("Function ran synchronously and blockedabunch of requests!");

```

___
