import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
} from 'semantic-ui-react'
import ProductService from '../Services/ProductService'
export default function ProductDetails() {
  let { name } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(name).then(result => setProducts(result.data))
  }, [])
  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Product Name</TableHeaderCell>
            <TableHeaderCell>Unit Price</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            products.map((product) => (
              <TableRow >
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.unitPrice}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
