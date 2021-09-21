
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Player.scss';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions/index';

function Player({ history, match, playing, getVideoSource }) {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideoSource(id);
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <Redirect to='/404/' />;
}

function mapStateToProps(state) {
  return {
    playing: state.playing,
  };
}

export default connect(mapStateToProps, { getVideoSource })(Player);
