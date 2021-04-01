const checkAdmin = (users, session) => {
  return users.find(({ email }) => email === session.user.email)
}

export default checkAdmin