import { useState, useEffect, useRef } from 'react';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

interface Time {
    hour: number;
    min: number;
    sec: number;
}

interface ButtonAttributes {
    type: string;
    value: string;
    btn_color: string;
    icon?: IconDefinition;
}

function App() {
    const [time, setTime] = useState<Time>({hour: 0, min: 0, sec: 0});
    const [enabled, setEnabled] = useState<boolean>(false);
    const renderCounterRef = useRef<number>(0);
    const [button, setButton] = useState<ButtonAttributes>({
        type: 'button',
        value: 'play',
        btn_color: '#14b8a6',
        icon: faPlay,
    });

    useEffect(() => {
        let intervalId;

        if (!!enabled) {
            intervalId = setInterval(() => {
                setTime({hour: new Date().getHours(), min: new Date().getMinutes(), sec: new Date().getSeconds()});
                renderCounterRef.current += 1;
            }, 1000);
        };

        return () => clearInterval(intervalId);
    }, [enabled]);

    const handleClick = () => {
        if (button.value === 'play') {
            setEnabled(true);

            setButton(previousState => {
                return { ...previousState, value:'pause', btn_color: '#0ea5e9', icon: faPause};
            });
        } else if (button.value === 'pause') {
            setEnabled(false);

            setButton(previousState => {
                return { ...previousState, value:'resume', icon: faPlay};
            });
        } else if (button.value === 'resume') {
            setEnabled(true);

            setButton(previousState => {
                return { ...previousState, value:'pause', icon: faPause};
            });
        };
    };

    const handleResetClick = () => {
        setTime({hour: 0, min: 0, sec: 0});

        setEnabled(false);

        setButton({ type: 'button', value:'play', btn_color: '#14b8a6', icon: faPlay});

        renderCounterRef.current = 0;
    };

    return (
      <div className="wrapper">
        <span className="timer">{String(time.hour).padStart(2, '0')}:{String(time.min).padStart(2, '0')}:{String(time.sec).padStart(2, '0')}</span>
        <p>Number of component renders: <span>{renderCounterRef.current}</span></p>
        <div className="buttons-container">
          <Button onClick={handleClick} attributes={button}/>
          {(button.value !== 'play' ||  button.value === 'resume') && (
          <Button onClick={handleResetClick} attributes={{type: 'reset', value: 'reset', btn_color: '#eab308'}}/>
        )}
        </div>
      </div>
    );
};

export default App;
