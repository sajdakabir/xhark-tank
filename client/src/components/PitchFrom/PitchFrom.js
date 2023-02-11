import React, { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap";
import './PitchFrom.css';
import AddIcon from '@mui/icons-material/Add';
function PitchFrom() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  }
  const [pitch, setPitch] = useState({
    entrepreneur: "",
    pitchTitle: "",
    pitchIdea: "",
    askAmount: 0,
    equity: 0,
    offers: [
      {
        investor: "",
        amount: 0,
        equity: 0,
        comment:"",
      },
    ],
  });
  // const navigate = useNavigate();
  //handle Input function
  const handleInput = (value) => {
    return setPitch((prev) => {
      return { ...prev, ...value };
    });
  };
  return (
    <>
      <Button className="button f" onClick={handleShow}>
        <AddIcon className='addIcon' sx={{ mr: 1 }}></AddIcon>
        Pitch Your Idea
      </Button>

      <Modal show={show} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>
            Pitch Your Idea
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form method="POST">
            {/* Entreprener Name */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form-lable">
                Founder/Enterpreneur Name
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={pitch.entrepreneur}
                onChange={(e) => handleInput({ entrepreneur: e.target.value })}
                autoFocus
                required
              />
            </Form.Group>
            {/* Startup or Product name */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="form-lable">
                Startup/Product Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your start-up name or product name"
                className="form-control"
                value={pitch.pitchTitle}
                onChange={(e) => handleInput({ pitchTitle: e.target.value })}
                autoFocus
                required
              />
            </Form.Group>
            {/* Product Description */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="form-lable">Description</Form.Label>
              <Form.Control
                placeholder="My business is about..."
                className="form-control"
                as="textarea"
                name="pitchIdea"
                value={pitch.pitchIdea}
                onChange={(e) => handleInput({ pitchIdea: e.target.value })}
                rows={3}
                required
              />
            </Form.Group>
            {/* Asked Amount */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label className="form-lable">
                Asked investment amount
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Money needed from your investor"
                className="form-control"
                name="askAmount"
                value={pitch.askAmount}
                onChange={(e) =>
                  handleInput({
                    askAmount: parseInt(e.target.value),
                  })
                }
                autoFocu
              />
            </Form.Group>
            {/* Equtity Offered */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label className="form-lable">
                Percentage Equity willing to offer
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Percentage Equity you are willing to offer to your investor"
                className="form-control"
                name="equity"
                value={pitch.equity}
                onChange={(e) =>
                  handleInput({ equity: parseInt(e.target.value) })
                }
                autoFocus
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button >Submit Pitch</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default PitchFrom
