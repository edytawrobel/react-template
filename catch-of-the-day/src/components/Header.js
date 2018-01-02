import React from 'react';
// import { render } from 'react-dom';

// class Header extends React.Component { // no need to use the full one, as we're not doing anything else but rendering some html
//   render() {
//     return (
      // <header className="top">
      //   <h1>
      //     Catch
      //     <span className="ofThe">
      //       <span className="of">of</span>
      //       <span className="the">the</span>
      //     </span>
      //     Day
      //   </h1>
      //   <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      // </header>
//     )
//   }

const Header = (props) => {
  return(
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

export default Header;
