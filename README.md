# Typeorm bug report

to run project you need a running PG server. you can run it using Docker like this:
```bash
docker run --rm --name test -h postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -e PGDATA=/test/postgresql/data postgres:10.4
```

Then run `npm i` and then `npm run start` to get the error