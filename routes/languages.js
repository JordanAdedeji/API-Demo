const express = require('express')
const router = express.Router()

const languages = ['Java', 'Ruby', 'JavaScript', 'Kotlin', 'Swift']

// Grab all languages
router.get('/', async (req, res) => {
  try {
    res.json(languages)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// Retrieve one
router.get('/:name', (req, res) => {
  const languageExists = languages.includes(req.params.name)
  if(languageExists){
    res.json(`${req.params.name} exists!`)
  } else {
    res.json(`${req.params.name} does not exist :(`)
  }
})

// Add a new language
router.post('/', async (req, res) => {
  console.log(req)
  languages.push(req.body.name)
  res.json(`${req.body.name} has been added!`)
})

//Update

// router.patch('/:name', async (req, res) => {
// })

// Deleting One

// router.delete('/:name', async (req, res) => {
// })
module.exports = router