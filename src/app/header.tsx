export default function HeaderSection() {
  return (
    <section className='HeaderSection'>
      <div className="HeaderSection HeaderSectionItem">
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Product</a>
        <a href="#">Contact</a>
      </div>


      <div className='main'>
        <img
          className='profile'
          src="/main.png"
          alt="main Logo"
        />

        <h1 className="SuperHi">
          Hi
        </h1>

        <h1>
          Mi nombre es Jesús, Y yo soy Ingeniero de Sistemas
        </h1>
      </div>
      <img
        className='background'
        src="/main.png"
        alt="main Logo"
      />

    </section>
  )
}