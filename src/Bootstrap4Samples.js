import * as React from 'react';
import JumbotronSample from './JumbotronSample';
import PopoverSample from './PopoverSample';
import ModalSample from './ModalSample';

class Bootstrap4Samples extends React.Component {
     render() {
        return (
            <React.Fragment>
                <JumbotronSample />
                <PopoverSample />
                <ModalSample />
            </React.Fragment>
        );
    }
}

export default Bootstrap4Samples;
