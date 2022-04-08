const { User, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findAllUsers = async () => {
  const result = await User.findAll()
  stringify(result)
  // Raw SQL: SELECT * FROM users;
}

const createNewUser = async () => {
  const result = await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@jane.com',
    userName: 'janedoe',
    password: '123456789',
    jobTitle: 'Systems Analyst'
  })
  stringify(result)
  // Raw SQL: INSERT INTO users (id, firstName, lastName, email, userName, password, jobTitle) VALUES (DEFAULT, 'Jane', 'Doe', 'jane@jane.com', 'janedoe', '123456789', 'Systems Analyst')
}

const deleteWhere = async () => {
  const result = await User.destroy({
    where: { firstName: 'Jane' }
  })
  stringify(result)
  // Raw SQL: DELETE FROM users WHERE firstName = 'Jane'
}

const updateUser = async () => {
  // Change lastname "Doe" to "Smith"
  // UPDATE users SET lastName='Smith' WHERE lastName = 'Doe'
}

const findUsersOnlyEmail = async () => {
  // Find all users and only show their email
  // Raw SQL: SELECT email FROM users;
}

const findAllJohns = async () => {
  // Find all users where firstname is John
  // Raw SQL: SELECT * FROM users WHERE firstName = "John";
}

const findJohnOrJane = async () => {
  // Find all users where firstname is either John or Jane
  // Raw SQL: SELECT * FROM users WHERE firstName = "John" OR firstName = "Jane";
}

const run = async () => {
  try {
    await findAllUsers()
    await createNewUser()
    await updateUser()
    await findUsersOnlyEmail()
    await findAllJohns()
    await findJohnOrJane()
    await deleteWhere()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
