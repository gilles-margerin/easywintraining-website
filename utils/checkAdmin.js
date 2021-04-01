const checkAdmin = (users, session) => {
  console.log(session.user)
  return users.find(({ email }) => email === session.user.email)
}

export default checkAdmin