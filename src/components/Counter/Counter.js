import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
//  render - метод к-ый возвращает только разметку
  // что бы повесить событие мы на тег вешаем слушателя onClick onSubmit onChange={() => {collback любой console.log...}}
  // если хотим передать collback как обработчик события в какой-то элемент, то делаете публичное св-во класса в которое закидываете стрелку

  // event доступен только в синхронном коде, если нужно что б отображался в асинхронном что бы он отображался нужно объявить const { target } = event; т.к как только снимается с функции сразу очищается