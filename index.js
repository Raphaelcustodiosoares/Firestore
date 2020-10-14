const Firestore = require("@google-cloud/firestore");

const firestore = new Firestore();

const collection = firestore.collection("carro");

exports.create = (request, response) => {
  const body = request.body;

  collection
    .doc(`${body.title}`)
    .set({
      title: body.placa,
      text: body.cor,
      text: body.preco
      text: body.modelo
    })
    .then(() => {
      response.sendStatus(200);
    })
    .catch(() => {
      console.warn("Error creating!");
      response.sendStatus(400);
    });
};

exports.read = (request, response) => {
  collection
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc.placa) {
        console.log(doc.placa, " => ", doc.data());
      });
    })
    .then(() => {
      response.sendStatus(200);
    })
    .catch(() => {
      console.warn("Error reading!");
      response.sendStatus(400);
    });
};
