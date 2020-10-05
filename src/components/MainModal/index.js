import * as React from 'react';
import {
  Bootstrap,
  Modal,
  Button,
} from 'bootstrap-4-react';

const MainModal = () => {
  return (
    <div>
      {/* Button trigger Modal */}
      <Button primary data-toggle="modal" data-target="#mainModal">Launch modal</Button>
      <Button
        primary
        onClick={() => { Bootstrap.modal('#mainModal'); }}
      >
        Закат вручную
      </Button>

      {/* Modal */}
      <Modal id="mainModal" fade>
        <Modal.Dialog centered>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
              <Modal.Close>
                <span aria-hidden="true">&times;</span>
              </Modal.Close>
            </Modal.Header>
            <Modal.Body>
              Modal body text goes here.
            </Modal.Body>
            <Modal.Footer>
              <Button secondary data-dismiss="modal">Close</Button>
              <Button primary>Save changes</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  )
}

export default MainModal;
