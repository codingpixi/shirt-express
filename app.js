let pickelesExpress = require('express');
let app = pickelesExpress();
let cors = require('cors');
app.use(cors());


let shirts = [
  {name:'Save my trees', price:'29'},
  {name:'Nature Lover', price:'19'},
  {name:'Forrest Walk', price:'39'}
]

app.get('/shirt/:shirtId', function (request, response) {
  let shirtId = request.params.shirtId;
  console.log(request.params.shirtId);
  let index = parseInt(shirtId);
  let shirt = shirts[index];
  response.send(shirt);
});

app.listen(3000, function() {
  console.log('hello');
});
