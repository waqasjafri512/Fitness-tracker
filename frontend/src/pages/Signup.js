import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(name, email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          <span className="material-symbols-outlined">
            {showPassword ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      </div>

      <button disabled={isLoading}>Sign up</button>

      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup