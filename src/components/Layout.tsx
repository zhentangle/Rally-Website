import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import CustomCursor from './CustomCursor'
import PageTransition from './PageTransition'
import { useSplashDismiss } from '@/hooks/useSplashDismiss'

export default function Layout() {
  useSplashDismiss(600)

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
