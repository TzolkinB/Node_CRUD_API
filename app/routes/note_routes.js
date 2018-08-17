module.exports = function(app, db) {
  app.post('/notes', (req, res) => { //post request to '/notes' path
    console.log(req.body)
    res.send('Create note')
  });
};
