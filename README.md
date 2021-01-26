# testNode

Dependencies
  - node 15.5.0
  - mariadb 10.3.27

## Installation ##

```
npm ci
```

Create api database.
```
mysql -u [YOUR_USER] -p -h localhost --execute="CREATE DATABASE tvapi;"
```

Import database.
```
mysql -u [YOUR_USER] -p -h localhost tvapi < ./storage/db/tvapi.sql
```

Copy/paste .env.example to .env file.
```
cp .env.example .env
```
Change DB_USER and DB_PASSWORD values.


Run server on port 8000.
```
npm run start
```

Now, you can access graphQL playgroud http://localhost:8000/graphql or via [Insomnia](https://insomnia.rest/download/)

Request graphQL body example :
```
{
  movie(
    id: 148,
    ratings: [3, 5],
    ratingsOrder: {column: "createdAt", direction: DESC}
 )
  {
    id
    title
    poster
    rating
    ratings {
      id
      rating
      comment
      date
      user {
        id
        username
      }
    }
  }
}
```


## Installation for testing ##

Copy/paste .env.testing.example to .env.testing file.
```
cp .env.testing.example .env.testing
```
Change DB_USER and DB_PASSWORD values.



Create testing database.
```
mysql -u [YOUR_USER] -p -h localhost --execute="CREATE DATABASE tvapi_testing;"
```

Import database.
```
mysql -u [YOUR_USER] -p -h localhost tvapi_testing < ./storage/db/tvapi.sql
```


## Ci ##

Run linter.
```
npm run lint
```

Run testing. (Not ready yet)
```
npm run test
```
