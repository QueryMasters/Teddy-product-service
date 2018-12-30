import React from 'react';
import styled from 'styled-components';
import Tile from './Tile.jsx';

const Caption = styled.div`
  text-align: center;
  clear: both;
  font-size: 13px;
  line-height: 19px;
  color: rgb(85, 85, 85);
`;

const PrePicture = styled.div`
  img {
    margin-left: 50px; 
    width: auto;
    max-width: 500px;
    height: 460px;
    max-height: 600px;
    align-content: center;
  }
`;

class PictureDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      tileCenterCoords: [0, 0],
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeaveImg = this.onMouseLeaveImg.bind(this);
  }

  onMouseOver(e) {
    if (this.state.hovered === false) {
      this.setState({
        hovered: true,
        tileCenterCoords: [e.clientX, e.clientY],
      });
    }
  }

  onMouseLeaveImg() {
    this.setState({
      hovered: false,
    });
  }

  render() {
    // the Picture styled component is inside of this PictureDisplay component
    // because if the entire set of pictures changes (e.g. a new product is
    // is rendered), then the number of pictures may not be the same, and we want
    // for the PictureDisplay to be well aligned with the PictureList and Title
    const Picture = styled(PrePicture)`
      margin-top: calc(-1 * ${ this.props.numPictures } * 55px);
    `;

    return  (
      <Picture>
        <img onMouseEnter={ this.onMouseOver } onMouseEnter={ this.onMouseOver } onMouseLeave={ this.onMouseLeaveImg } src={ this.props.pictureURL } ></img>
        { this.state.hovered && this.state.tileCenterCoords ?
          <Tile xCoord={ this.state.tileCenterCoords[0] } yCoord={ this.state.tileCenterCoords[1] } 
            changeProductDisplayHoveredState={ this.onMouseLeaveImg } pictureURL={ this.props.pictureURL } />
          : ''
        }
        <Caption>{ this.state.hovered ? 'Click image to open expanded view' : 'Roll over image to zoom in' }</Caption>
      </Picture>
    );
  }
}

export default PictureDisplay;
