import React from 'react'
import Categories from './Categories'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import ProductList from '../Pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from '../Pages/ProductDetails'
import CartDetail from '../Pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../Pages/ProductAdd'
export default function DashBoard() {
    return (
        <div>
            <ToastContainer/>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route exact path="/" Component={ProductList} />
                            <Route path="/products" Component={ProductList} />
                            <Route path="/products/:name" Component={ProductDetails} />
                            <Route path="/cart" Component={CartDetail} />
                            <Route path="/product/add" Component={ProductAdd}/>
                        </Routes>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

