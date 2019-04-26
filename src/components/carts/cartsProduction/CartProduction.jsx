import React from 'react'
import { Table, Container, Row, Col, Input} from 'reactstrap'
import CartHeader from '../CartHeader'
import CartProductionTotal from '../CartProductionTotal'

import './CartProduction.scss'
import OthersProduction from './OthersProduction';
import ProductionStore from './ProductionStore';

class CartProduct extends React.Component {
    render() {
        return (
            <Container className="cart mt-4 pt-5 pr-0 pl-0">
                <Row>
                    <Col xs="6" className="body-left">
                        <div className="date">Posisi per <span className="date-update">Sabtu, 27 Oct 2018</span></div>
                        <div className="change-date"><strong>Ubah Tanggal</strong></div>
                        <div className="view-img">
                            <img></img>
                        </div>
                        <div className="select-view-product">
                            Pilih product untuk melihat stok
                        </div>
    
                    </Col>
                    <Col xs="6" className="body-right">
                        <tr>
                            <th><i class="fas fa-plus-circle add-product"> Produksi</i></th>
                        </tr>
                        <tr>
                            <td className="production">Produksi 1</td>
                            <td className="product-total text-right" >-</td>
                            <td><i class="fas fa-pen-square edit"></i></td>
                        </tr>
                        <tr>
                            <td className="production">Produksi 2</td>
                            <td className="product-total text-right">-</td>
                            <td><i class="fas fa-pen-square edit"></i></td>
                        </tr>
                        <tr>
                            <td className="production">Produksi 3</td>
                            <td className="product-total text-right">-</td>
                            <td><i class="fas fa-pen-square edit"></i></td>
                        </tr>
                        <hr/>
                        <tr>
                            <td className="total-production">Total Produksi</td>
                            <td className="calc-product-total text-right">-</td>
                        </tr>

                        <ProductionStore/>
                        <OthersProduction/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input className="note-production" type="textarea" name="catatan" placeholder="CATATAN" rows="3"></Input>
                    </Col>
                </Row>

                <Table borderless striped>
                    <CartProductionTotal/>
                </Table>
            </Container>
        )
    }
}

export default CartProduct