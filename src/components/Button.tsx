import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    onClick: () => void;
    attributes: {
        type: string;
        value: string;
        btn_color: string;
        icon?: IconDefinition;
    };
};

const Button: React.FC<Props> = ({ onClick, attributes }) => {
    return (
      <button onClick={onClick} style={{backgroundColor: `${attributes.btn_color}`}} type={attributes.type} value={attributes.value}>
        {!!attributes.icon && (
          <FontAwesomeIcon icon={attributes.icon} style={{color: "#ffffff",}} />
        )}
        {attributes.value}
      </button>
    )
};

export default Button;
