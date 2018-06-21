Usegul MongoDB Queries
======================

- Search specific document providing a partial string
  db.<collection>.find({ "name" : /.*<string>.*/i })
  db.<collection>.find({ "name" : { '$regex': '<string>' , '$options': 'i' }})

  *i* stands for 'case sensitive'
  Replace *<collection>* and *<string>* for the collection name and the keyword to search.
