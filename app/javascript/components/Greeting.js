import React, { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from "prop-types"
import { getGreeting } from "../api_handler";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <main>
      <h1>{greeting.greeting}</h1>
    </main>
    );
}

Greeting.propTypes = {
  greeting: PropTypes.node
};

export default Greeting
