import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, icon, multiline, ...rest }, ref) {
  return (
    <Container style={style} multiline={multiline}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput {...rest} multiline={multiline} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  multiline: PropTypes.bool,
};

Input.defaultProps = {
  icon: null,
  style: {},
  multiline: false,
};

export default forwardRef(Input);
