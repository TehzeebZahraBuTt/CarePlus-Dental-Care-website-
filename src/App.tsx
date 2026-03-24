/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Services } from "./pages/Services"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="careplus-theme">
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}
