import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { ApoiarPage } from './pages/ApoiarPage'
import { ComoUsarPage } from './pages/ComoUsarPage'
import { HomePage } from './pages/HomePage'
import { MedicosPage } from './pages/MedicosPage'
import { usePageMeta } from './hooks/usePageMeta'

function AppShell() {
  usePageMeta()

  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medicos" element={<MedicosPage />} />
          <Route path="/como-usar" element={<ComoUsarPage />} />
          <Route path="/apoiar" element={<ApoiarPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

export default function App() {
  return <AppShell />
}
