import { Button, Modal } from 'bootstrap'
import React from 'react'

const URLModal = ({ show, handleClose, handleSaveLink, link, setLink }) => {
  return (
     <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Insert Link</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <input
            type="text"
            className="form-control"
            placeholder="Enter link here"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            aria-label="Enter link"
        />
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleSaveLink}>
            Save Link
        </Button>
    </Modal.Footer>
</Modal>
  )
}

export default URLModal
