// react mai anchor tag use nhi krte hai..

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  key,
}) {
  console.log(name);
  return (
    <div>
      <a className="country-card" href={`/country.html?name=${name.common}`}>
        <img src={flag} alt={name + "flag"} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </a>
    </div>
  );
}
