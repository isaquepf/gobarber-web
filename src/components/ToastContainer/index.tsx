import React, { useCallback, useEffect } from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', transform: 'rotateZ(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateZ(360deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateZ(0de)' },
    },
  );

  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
