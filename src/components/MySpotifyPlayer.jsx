import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Dimension prop type
const dimensionPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  compact: {
    width: 300,
    height: 80,
  },
};

class MySpotifyPlayer extends Component {
  render() {
    const { uri, view, theme } = this.props;
    let { size } = this.props;

    if (typeof size === 'string') {
      size = sizePresets[size];
    }

    return (
      <iframe
        title="Spotify"
        className="SpotifyPlayer"
        src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
        width={size.width}
        height={size.height}
        frameBorder="0"
        allowtransparency="true"
      />
    );
  }

}

MySpotifyPlayer.propTypes = {

  // Spotify URI
  uri: PropTypes.string.isRequired,

  // Size as either a preset or as custom dimensions
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['large', 'compact']),
    PropTypes.shape({
      width: dimensionPropType,
      height: dimensionPropType,
    }),
  ]),

  // View
  view: PropTypes.oneOf(['list', 'coverart']),

  // Theme
  theme: PropTypes.oneOf(['black', 'white']),
};

MySpotifyPlayer.defaultProps = {
  size: 'large',
  view: 'list',
  theme: 'black',
};

export default MySpotifyPlayer;