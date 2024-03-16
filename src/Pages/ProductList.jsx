import React, { useState ,useEffect} from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button
} from 'semantic-ui-react'
import ProductService from '../Services/ProductService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/Actions/CartActions'
import { toast } from 'react-toastify'
export default function ProductList() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  useEffect(()=> {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data))
  },[])
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.productName} sebete eklendi!`)
  }
  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow textAlign='center'>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Product Name</TableHeaderCell>
            <TableHeaderCell>Unit Price</TableHeaderCell>
            <TableHeaderCell>Sebete Ekle</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            products.map((product) => (
              <TableRow key={product.id} textAlign='center'>
                <TableCell>{product.id}</TableCell>
                <TableCell><Link to={`/products/${product.productName}`}> {product.productName} </Link></TableCell>
                <TableCell>{product.unitPrice}</TableCell>
                <Button color='orange' onClick={() => handleAddToCart(product)}> Sebete Ekle </Button>
              </TableRow>
            ))
          }
        </TableBody>
        
      </Table>
    </div>
  )
}
