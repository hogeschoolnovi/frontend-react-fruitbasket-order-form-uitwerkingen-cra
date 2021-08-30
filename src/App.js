import React, { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import InputField from './components/InputField';
import './App.css';

function App() {
  const [strawberries, setStrawberries] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [zipcode, setZipcode] = useState('');
  const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
  const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
  const [remark, setRemark] = useState('');
  const [agreeTerms, toggleAgreeTerms] = useState(false);

  function resetFruits() {
    setStrawberries(0);
    setBananas(0);
    setApples(0);
    setKiwis(0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
    Leeftijd: ${age}, 
    Postcode: ${zipcode}, 
    Bezorgfrequentie: ${deliveryFrequency},
    Opmerkingen: ${remark},
    Algemene voorwaarden: ${agreeTerms}
    `);
    console.log(`Fruitmand bestelling - aardbeiden: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <section className="fruit-counters">
        <article>
          <h2>🍓 Aardbeien</h2>
          <Counter
            fruitCount={strawberries}
            setFruitCount={setStrawberries}
          />
        </article>
        <article>
          <h2>🍌 Bananen</h2>
          <Counter
            fruitCount={bananas}
            setFruitCount={setBananas}
          />
        </article>
        <article>
          <h2>🍏 Appels</h2>
          <Counter
            fruitCount={apples}
            setFruitCount={setApples}
          />
        </article>
        <article>
          <h2>🥝 Kiwi's</h2>
          <Counter
            fruitCount={kiwis}
            setFruitCount={setKiwis}
          />
        </article>
        <Button type="button" clickHandler={resetFruits}>Reset</Button>
      </section>

      <form onSubmit={handleSubmit}>
        <section>
          <InputField name="firstname" label="Voornaam" inputType="text" value={firstname} changeHandler={setFirstname} />
        </section>
        <section>
          <InputField name="lastname" label="Achternaam" inputType="text" value={lastname} changeHandler={setLastname} />
        </section>
        <section>
          <InputField name="age" label="Leeftijd" inputType="number" value={age} changeHandler={setAge} />
        </section>
        <section>
          <InputField name="zipcode" label="Postcode" inputType="text" value={zipcode} changeHandler={setZipcode} />
        </section>
        <section>
          <label htmlFor="delivery-field">Bezorgfrequentie</label>
        </section>
        <section>
          <select
            name="delivery-field" id="delivery-field"
            value={deliveryFrequency}
            onChange={(e) => toggleDeliveryFrequency(e.target.value)}
          >
            <option value="week">Iedere week</option>
            <option value="two-week">Om de week</option>
            <option value="month">Iedere maand</option>
          </select>
        </section>
        <section>
        <input
          type="radio"
          value="daytime"
          name="timeslot-field"
          id="timeslot-field-daytime"
          checked={deliveryTimeslot === 'daytime'}
          onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
        />
        <label htmlFor="timeslot-field-daytime">Overdag</label>
          <input
            type="radio"
            value="evening"
            checked={deliveryTimeslot === 'evening'}
            onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
            name="timeslot-field"
            id="timeslot-field-evening"
          />
          <label htmlFor="timeslot-field-evening">'s Avonds</label>
        </section>
        <section>
          <label htmlFor="remark-field">Opmerking</label>
          <textarea
            name="remark-field"
            id="remark-field"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            rows={6}
            cols={40}
          />
        </section>
        <section>
          <input
            type="checkbox"
            name="agree-field"
            id="agree-field"
            value={agreeTerms}
            onChange={() => toggleAgreeTerms(!agreeTerms)}
          />
          <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
        </section>

        <Button type="submit">Verzend</Button>
      </form>
    </>
  );
}

export default App;
