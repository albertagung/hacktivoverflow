const Answer = require('../models/answerModel.js')

// Find all answer
let findAllAnswer = function (req, res) {
  Answer.find()
  .populate('userAnswer')
  .populate('voteAnswer')
  .exec()
  .then(function (dataAnswer) {
    res.status(200).send(dataAnswer)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Find answer by id
let findAnswerById = function (req, res) {
  Answer.findOne(
    {
      _id: req.params.idAnswer
    }
  ).populate('userAnswer')
  .populate('voteAnswer')
  .exec()
  .then(function (dataAnswer) {
    res.status(200).send(dataAnswer)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Adding new answer
let postNewAnswer = function (req, res) {
  let newAnswer = Answer(
    {
      title: req.body.title,
      content: req.body.content,
      userAnswer: req.body.idUser,
      voteAnswer: req.body.idUser,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  )
  newAnswer.save().then(function (dataAnswer) {
    res.status(200).send(dataAnswer)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Update answer
let updateAnswer = function (req, res) {
  Answer.findOneAndUpdate(
    {
      _id: req.params.idAnswer
    },
    {
      title: req.body.title,
      content: req.body.content,
      updatedAt: new Date()
    }
  ).populate('userAnswer')
  .populate('voteAnswer')
  .exec()
  .then(function (dataAnswer) {
    res.status(200).send(dataAnswer)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Deleting answer
let removeAnswer = function (req, res) {
  Answer.findOneAndRemove(
    {
      _id: req.params.idUAnswer
    }
  ).then(function (dataAnswer) {
    res.status(200).send(dataAnswer)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

module.exports = {
  findAllAnswer,
  findAnswerById,
  postNewAnswer,
  updateAnswer,
  removeAnswer
}