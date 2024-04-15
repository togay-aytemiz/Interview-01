import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  
  const renderObject = (obj) => {
    return Object.entries(obj).map(([key, value], index) => {

      if (typeof value === 'object' && value !== null) {
        return (
          <div key={key}>
            {key}
            <div style={{ marginLeft: 20 }}>{renderObject(value)}</div>
          </div>
        );
      }
      return <p key={index}>{`${key}: ${value}`}</p>;
    });
  };

  return (
    <div>
      {renderObject(nestedObjected)}
    </div>
  );
}

export default App
