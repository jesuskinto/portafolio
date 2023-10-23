interface Item {
  url: string;
  title: string;
  imageUrl: string;

}

interface StackItemProps {
  items: Item[];
}


const items = [
  { title: 'Photoshop', imageUrl: 'photoshop.png', url: 'photoshop.png' },
  { title: 'Photoshop', imageUrl: 'photoshop.png', url: 'photoshop.png' },
  { title: 'Photoshop', imageUrl: 'photoshop.png', url: 'photoshop.png' },
  { title: 'Photoshop', imageUrl: 'photoshop.png', url: 'photoshop.png' }
]

const StackItem: React.FC<StackItemProps> = ({ items }) => {
  return (
    <div className="StackItem">
      <div className="StackItem StackItemBox">
        {items.map((item, index) =>
          <a key={index} href={item.url}>
            <img
              className='ico'
              src={item.imageUrl}
              alt="stack ico"
            />
          </a>
        )}
        <span>Images and video</span>
      </div>
      <ul>
        {items.map((item, index) =>
          <a key={index} href={item.url}>
            <li>{item.title}</li>
          </a>
        )}
      </ul>
    </div>
  )
}

export default function StackSection() {
  return (
    <section className='StackSection'>
      <h2>Stack</h2>
      <div className="StackSectionWrapper">
        <StackItem items={items} />
        <StackItem items={items} />
        <StackItem items={items} />
      </div>
    </section>
  )
}