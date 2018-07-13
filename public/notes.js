app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');   permet d'envoyer du contenu html
    res.send({// Pour renvoyer du contenu JSON
      name: 'Bibata',
      likes: [
        'Movies',
        'Cities',
        'Soccer'
      ]
    });
  });