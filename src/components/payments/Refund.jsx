import React from 'react'
import { Container, Row, Col, NavLink, Button, Input, FormGroup, Label } from 'reactstrap';
import NumberFormat from 'react-number-format';
import CalcNumericRefund from '../calcs/CalcNumericRefund';
import './Refund.scss';

const Refund = (props) => {
  return (

    <Row className="Refund d-block">
      <Container>
        <Row className="SidebarHeader">
          <Col>
            <NavLink onClick={() => props.cartStore.toggleOpenRefundShow()} className="sidebar-header-nav"><i className="fas fa-arrow-left mr-2"></i>Refund</NavLink>
          </Col>
        </Row>

        <Row sm={3}>
          <FormGroup check>
              <Label check> Pesanan </Label>
              <Input checked={props.cartStore.state.selectedRefund === "PS"} onChange={props.cartStore.handleRefundChange} value="PS" className="radio sm" size="sm" type="radio" name="PS" id="PS" /> {' '}
            </FormGroup>
            <FormGroup check>
              <Label check> Toko </Label>
              <Input checked={props.cartStore.state.selectedRefund === "TK"} onChange={props.cartStore.handleRefundChange} value="TK" className="radio sm" size="sm" type="radio" name="TK" id="TK" /> {' '}
            </FormGroup>                      
          </Row>

        <Row className="SidebarBody" >

          {/* LEFT */}
          <Col className="pr-0">
            <h5>NOMOR ORDER</h5>
            {/* <Input className="mb-4" type="text" name="paymentDiscount" id="paymentDiscount" placeholder=" ..." bsSize="lg" /> */}
            <div className={props.cartStore.state.activeInputRefund === 'refundCode' ? 'input-keyboard-wrapper active-input' : 'input-keyboard-wrapper'}>
              <Input className="input-masking mb-4" type="text" placeholder=" ..." bsSize="lg" 
                value={props.cartStore.state.whatRefund + '-' + (props.cartStore.state.valueInputRefund["refundCode"] || "" ? props.cartStore.state.valueInputRefund["refundCode"] || "" : "")}
                name="refundCode" id="refundCode"
                onFocus={props.cartStore.setActiveInputRefund}
                autoFocus
              />
            </div>

            <h5>APPROVAL</h5>
            {/* <Input className="mb-4" type="text" name="paymentDiscount" id="paymentDiscount" placeholder=" ..." bsSize="lg" /> */}
            <div className={props.cartStore.state.activeInputApproval === 'approvalCode' ? 'input-keyboard-wrapper active-input' : 'input-keyboard-wrapper'}>
              <Input className="input-masking mb-4" type="text" placeholder=" ..." bsSize="lg" 
                value={props.cartStore.state.valueInputRefund["approvalCode"] || ""}
                name="approvalCode" id="approvalCode" type="password"
                onFocus={props.cartStore.setActiveInputRefund}
              />
            </div> 

          </Col>

          {/* RIGHT */}
          <Col className="px-0">
            <CalcNumericRefund
              cartStore={props.cartStore} 
              onEnter={props.cartStore.onEnter} 
              inputName={props.cartStore.state.inputName}
            />
            
          </Col>
          
        </Row>

        <Row className="SidebarFooter mt-4">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Button onClick={() => props.cartStore.doRefund()} color="danger" size="lg" className="py-3 px-5"><i className="fas fa-retweet mr-2"></i> Search</Button>
          </Col>
        </Row>
        <Row className="SidebarFooter mt-4">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Button onClick={() => props.modalStore.toggleModal('bayar', '') } color="danger" size="lg" className="py-3 px-5"><i className="fas fa-retweet mr-2"></i> REFUND</Button>
          </Col>
        </Row>
      </Container>
    </Row>

  )
}

export default Refund