// FormAddClock.tsx
import React, { Component } from 'react';
import NewClock from './NewClock';
// import{ v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');

interface FormAddClockState {
  city: string;
  timezone: number;
  clocks: { key: string; city: string; timezone: number; time: string }[];
}

export class FormAddClock extends Component<{}, FormAddClockState> {
  intervalID: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      city: '',
      timezone: 0,
      clocks: [],
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleTimezoneChange = this.handleTimezoneChange.bind(this);
    this.handleAddClock = this.handleAddClock.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.updateClocks();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalID) clearInterval(this.intervalID);
  }

  handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ city: event.target.value });
  }

  handleTimezoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      this.setState({ timezone: value });
    }
  }

  handleAddClock(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { city, timezone } = this.state;
    const key = uuidv4();
    this.setState(prevState => ({
      clocks: [...prevState.clocks, { key, city, timezone, time: '' }],
    }));
  }

  updateClocks() {
    const updatedClocks = this.state.clocks.map(clock => ({
      ...clock,
      time: this.calculateTime(clock.timezone),
    }));
    this.setState({ clocks: updatedClocks });
  }

  calculateTime(timezone: number): string {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * timezone));
    return localTime.toLocaleTimeString();
  }

  render() {
    const { city, timezone } = this.state;
    return (
        <>
      <form className='clock-form' onSubmit={this.handleAddClock}>

        <div className="input-class">
        <label htmlFor="city">Название</label>
        <input type="text" id="city" value={city} onChange={this.handleCityChange} />
        </div>
        
        <div className="input-class">
        <label htmlFor="timexone">Временная зона</label>
        <input type="number" id="timexone" maxLength={12} minLength={-12} 
        value={timezone} onChange={this.handleTimezoneChange} />
        </div>
        <button type="submit" className='btn-clock'>Добавить</button>
        </form>
        <div className="clocks-container">
          {/* Отображаем все часы */}
          {this.state.clocks.map(clock => (
            <NewClock key={clock.key} city={clock.city} time={clock.time} />
          ))}
        </div>
        </>
    );
  }
}

export default FormAddClock;

