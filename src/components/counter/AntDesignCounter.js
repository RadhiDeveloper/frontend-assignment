import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { selectCount, reset } from "./counterSlice";

const StyledCounter = styled.p`
  font-size: 30px;
  font-weight: 600;
  border: 1px solid #f5f2f2;
  background-color: #f5f2f2;
  padding: 10px 20px;
  color: ${props => props.isOdd ? '#008000' : '#000000'};
  margin: 0 0 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: #40a9ff;
  border-color: #40a9ff;
  margin: 0 0 20px;
  height: auto;
`;

const StyledCard = styled(Card)`
  margin: 20px 0 0;
`;

class AntDesignCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterHistory: new Array(10).fill(0),
    };

    this.interval = 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => { this.timer() }, 2000);
  }

  timer = () => {
    const { count } = this.props;
    this.setState((prev) => ({ counterHistory: [...prev.counterHistory, count]}));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { count, reset } = this.props;
    const { counterHistory } = this.state;
    const countersToDisplay = counterHistory.slice(-10).reverse();
    return (
      <StyledCard title="Ant Design Counter">
        <StyledCounter isOdd={count % 2 !== 0 }>{count}</StyledCounter>
        <StyledButton onClick={() => reset()}>Reset</StyledButton>
        <ul>
          {countersToDisplay.map((counter, index) => (
            <li key={index}>{counter}</li>
          ))}
        </ul>
      </StyledCard>
    );
  }
}

const mapStateToProps = (state) => ({
  count: selectCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AntDesignCounter);