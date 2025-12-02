import Link from "next/link"

export default function SignUp() {
  return (
    <div>
      <h2>Akwukwo Auth</h2>
      <div style={{ display: 'flex', gap: 50 }}>
        <div>
        <Link href="/auth/register-student">Students Sign Up</Link>
      </div>
        <div>
        <Link href="/auth/register-teacher">Teachers Sign Up</Link>
      </div>
      </div>
      <hr />
      <div>
        <Link href="/auth/login">Login</Link>
      </div>
    </div>
  )
}
