// factory pattern
// 像工厂一样批量生产具有相同属性的对象
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    console.log(`His name is ${lastName} ${firstName}`)
  }
})