import * as React from 'react';
import { Modal, Button } from 'bootstrap-4-react';

export default class ModalSample extends React.Component {
  render() {
    return (
      <div>
        {/* Button trigger Modal */}
        <Button primary data-toggle="modal" data-target="#largeModal">Large modal</Button>
        <Button primary data-toggle="modal" data-target="#smallModal">Small modal</Button>

        {/* Large modal */}
        <Modal id="largeModal" fade>
          <Modal.Dialog lg>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                ...
              </Modal.Body>
              <Modal.Footer>
                <Button secondary data-dismiss="modal">Close</Button>
                <Button primary>Save changes</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>

        {/* Small modal */}
        <Modal id="smallModal" fade>
          <Modal.Dialog sm>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>
                ...
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
}