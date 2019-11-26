import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './styles.css'

function PanelController(props) {
  const transitions = useTransition(props.pagesConfig[props.state.index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {duration: props.delayConfig},
    onRest: () => console.log('done fade')
  });

  function render() {
    return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={{ ...props}}>
      <img src={item.img}></img>
    </animated.div>
    ));
  }

  return render();
}

export default PanelController;