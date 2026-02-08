const { useMemo, useState } = React;

const API_BASE_URL = (window.FLIGHTS_API_BASE_URL || 'http://localhost:3000/api/v1').replace(/\/$/, '');

const initialFilters = {
  departureAirportId: '',
  arrivalAirportId: '',
  minPrice: '',
  maxPrice: ''
};

function App() {
  const [filters, setFilters] = useState(initialFilters);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => value && params.set(key, value));
    return params.toString() ? `?${params.toString()}` : '';
  }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setFlights([]);
    setError('');
  };

  const searchFlights = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/flights${queryString}`);
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const payload = await response.json();
      setFlights(payload?.data || []);
    } catch (requestError) {
      setFlights([]);
      setError(requestError.message || 'Unable to fetch flights.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app-shell">
      <section className="card">
        <h1>Flights Search Frontend</h1>
        <p className="subtitle">React frontend to query flights from <code>{API_BASE_URL}/flights</code></p>

        <form onSubmit={searchFlights} className="form-grid">
          <label>
            Departure Airport ID
            <input name="departureAirportId" value={filters.departureAirportId} onChange={handleFilterChange} />
          </label>

          <label>
            Arrival Airport ID
            <input name="arrivalAirportId" value={filters.arrivalAirportId} onChange={handleFilterChange} />
          </label>

          <label>
            Min Price
            <input name="minPrice" type="number" min="0" value={filters.minPrice} onChange={handleFilterChange} />
          </label>

          <label>
            Max Price
            <input name="maxPrice" type="number" min="0" value={filters.maxPrice} onChange={handleFilterChange} />
          </label>

          <div className="button-row">
            <button type="submit" disabled={loading}>{loading ? 'Searching...' : 'Search Flights'}</button>
            <button type="button" className="secondary" onClick={resetFilters}>Reset</button>
          </div>
        </form>

        {error && <p className="error">{error}</p>}

        <section className="results">
          <h2>Results</h2>
          {flights.length === 0 && !loading && <p className="muted">No flights loaded yet.</p>}
          {flights.length > 0 && (
            <ul>
              {flights.map((flight) => (
                <li key={flight.id}>
                  <strong>{flight.flightNumber}</strong> — {flight.departureAirportId} to {flight.arrivalAirportId} | ₹{flight.price}
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
