import HeaderSection from './header'
import AboutSection from './about'
import StackSection from './stack'


function ProjectSection() {
  return (
    <section className='project'>
      ProjectSection
    </section>
  )
}


function ContactSection() {
  return (
    <section className='contact'>
      ContactSection
    </section>
  )
}

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <AboutSection />
      <StackSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
