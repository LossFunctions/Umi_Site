import {
  Navbar,
  Hero,
  About,
  WorkExperience,
  Skills,
  Projects,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Navbar />

      <main>
        {/* LIGHT: Hero Section */}
        <Hero />

        {/* LIGHT: About Section */}
        <About />

        {/* DARK: Work Experience Section */}
        <WorkExperience />

        {/* LIGHT: Skills Section */}
        <Skills />

        {/* DARK: Projects Section (Coming Soon) */}
        <Projects />

        {/* DARK: Contact Section */}
        <Contact />
      </main>

      {/* DARK: Footer */}
      <Footer />
    </div>
  );
}

export default App;
