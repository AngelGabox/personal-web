import React, { useState } from 'react'
import "./Carousel.css"
import piCountries from "../../assets/projects/piCountries.png"
import piDogs from "../../assets/projects/PIDogs.png"
import data from './data'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

const projects = [
  piCountries,
  piDogs
]


export default function App() {
  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', border: "2px solid hotpink" },
    to: {
      size: open ? '100%' : '20%',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className={"wrapper"}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={"container-projects"}
        onClick={() => set(open => !open)}>
        {transition((style, item) => (
          <animated.div
            className={"item"}
            style={{ ...style, background: item.css }}>
            {/* <img src={projects[item.css]} alt="" /> */}
          </animated.div>
        ))}
      </animated.div>
    </div>
  )
}