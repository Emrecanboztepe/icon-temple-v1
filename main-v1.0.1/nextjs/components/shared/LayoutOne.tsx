import { Fragment, ReactNode } from 'react'
import FooterV2 from './FooterV2'
import Navbar from './Navbar'

const LayoutOne = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <Fragment>
      <Navbar />
      <main className="relative z-10 bg-backgroundBody dark:bg-dark">{children}</main>
      <FooterV2 />
    </Fragment>
  )
}

export default LayoutOne
