import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState, useRef, useEffect } from 'react'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleClick = () => {
    logout()
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Fitness Tracker</h1>
        </Link>
        <div className="nav-links">
          <Link to="/supplements"><p>Supplements</p></Link>
          <Link to="/exercises"><p>Exercises</p></Link>
          <Link to="/weight-lifting"><p>Weight Lifting</p></Link>
          <Link to="/cardio"><p>Cardio</p></Link>
        </div>
        <nav>
          {user && (
            <div className="user-nav" ref={dropdownRef}>
              <button
                className="profile-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="material-symbols-outlined">account_circle</span>
                Profile
                <span className={`material-symbols-outlined arrow ${isDropdownOpen ? 'open' : ''}`}>
                  expand_more
                </span>
              </button>

              {isDropdownOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-info">
                    <span className="info-item">
                      <span className="label">Name:</span>
                      <span className="value">{user.name || 'User'}</span>
                    </span>
                    <span className="info-item">
                      <span className="label">Email:</span>
                      <span className="value">{user.email}</span>
                    </span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="logout-btn" onClick={handleClick}>
                    <span className="material-symbols-outlined">logout</span>
                    Log out
                  </button>
                </div>
              )}
            </div>
          )}
          {!user && (
            <div className="auth-links">
              <Link to="/login" className="login-link">Login</Link>
              <Link to="/signup" className="login-link">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
