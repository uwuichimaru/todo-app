# todo-app
straightforward version of todo list 

<h1>Step number 1</h1>
firstly you need to install node modules -> write command yarn or npm i
wait for installation and then you should to install and init prisma orm
follow to: 

```
npm install prisma --save-dev and then npx prisma init --datasource-provider sqlite
```

<h1>Step number 2</h1>

```
create a local file which is .env and put inside this one:
```

```
PORT = 5000
JWT_SECRET='XXX\\//' # generate your own jwt secret code
DATABASE_URL="file:./dev.db"
```

and then run server 
```
(npm start) (yarn start)
``` 

<h3>Step number 3</h3>

```
follow to terminal 'cd client' and execute yarn or npm i
then do (npm run dev) or (yarn dev)
```

and follow to 
```
http://localhost:5173/
```
here we go
