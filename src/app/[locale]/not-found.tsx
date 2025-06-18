import Link from 'next/link'

const NotFounded = () => {
  return (
      <div>
        Not founded,&nbsp;
        <Link href="/">
          click here to return
        </Link>
      </div>
  )
}

export default NotFounded