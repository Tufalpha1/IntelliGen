import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Landing = () => {
  return (
    <div>
      page
      <div>
        <Link href="/sign-in">
          <Button>Sign in</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign up</Button>
        </Link>
      </div>
    </div>
  );
}

export default Landing