# Real World App
"The mother of all demo apps" [realworld](https://github.com/gothinkster/realworld)

## Runing

```zsh
# if it's not running
sudo systemctl docker start
sudo docker-comse up
npm run dev
```

## Tests
```zsh
npm run test
```

## Requests examples
### Create a client
```zsh
curl -d '{"name":"value1", "lastname":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:8000/api/clients
```

### Get clients
```zsh
curl http://localhost:8000/api/clients
```

### Note
To pretty print the json in the response you can pipe the request into `json_pp` like so:
```zsh
curl http://localhost:8000/api/clients | json_pp
```

Antony D'Amico
