import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import DataTable from "../../components/UI/DataTable";
import Input from "../../components/UI/Input";
import DialogModal from "../../components/UI/Modal";

import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { addProduct, getProductList } from "../../actions/product.actions";
import { useDispatch, useSelector } from "react-redux";

const ProudctList = () => {
  const dispatch = useDispatch();

  const [productList, setProductList] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState("");

  console.log(useSelector((state) => state.productList));

  // all form filed

  const [slug, setSlug] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [igst, setIgst] = useState(0.0);
  const [cgst, setCgst] = useState(0.0);
  const [sgst, setSgst] = useState(0.0);
  const [stockable, setStockable] = useState(false);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const onAddProduct = () => {
    setTitle("Add Product");
    setIsShow(true);
  };
  const handleEdit = (data) => {
    console.log(data);
  };
  const handleDelete = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    setIsShow(false);
  };
  const handleSubmit = () => {
    let product = {
      name,
      slug,
      price,
      igst,
      cgst,
      sgst,
      stockable,
    };
    console.log("on submit", product);
    dispatch(addProduct(product));
  };

  const data = [
    { id: "1", name: "xyz", price: "100" },
    { id: "2", name: "fsdf", price: "200" },
  ];
  const cols = (handleEdit, handleDelete) => {
    return [
      {
        title: "ID",
        key: "id",
        render: (rowData) => {
          return <span>{rowData.id}</span>;
        },
      },
      {
        title: "Name",
        key: "name",
        render: (rowData) => {
          return <span>{rowData.name}</span>;
        },
      },
      {
        title: "Price",
        key: "price",
        render: (rowData) => {
          return <span>{rowData.price}</span>;
        },
      },
      {
        title: "Action",
        key: "action",
        render: (rowData) => {
          return (
            <div className=''>
              <Button variant='warning' onClick={() => handleEdit(rowData)}>
                Edit
              </Button>
              <Button variant='danger' onClick={() => handleDelete(rowData)}>
                Delete
              </Button>
            </div>
          );
        },
      },
    ];
  };
  return (
    <Layout sidebar='true'>
      <Container style={{ marginTop: "50px" }}>
        <h2>Product</h2>
        <Row style={{ marginTop: "15px" }}>
          <Col sm={12}>
            <Row>
              <Col sm={12}>
                <Button
                  variant='primary'
                  className='float-right'
                  onClick={onAddProduct}
                >
                  Add Product
                </Button>
              </Col>
              <Col sm={12}>
                <DataTable
                  data={data}
                  cols={cols(handleEdit, handleDelete)}
                  isDark={false}
                  hoverable
                  striped
                  bordered={true}
                />
              </Col>
              <Col>
                <Form>
                  <DialogModal
                    show={isShow}
                    title={title}
                    onClick={handleClose}
                    onSubmit={handleSubmit}
                    onHide={handleClose}
                  >
                    <Row style={{ marginTop: "15px" }}>
                      <Col md={{ span: 6, offset: 3 }}>
                        <Row>
                          <Col>
                            <Input
                              label='Product Name'
                              type='text'
                              placeholder='Enter Name'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Input
                          label='Slug Name'
                          type='text'
                          placeholder='Enter Slug Name'
                          value={slug}
                          onChange={(e) => setSlug(e.target.value)}
                        />

                        <Input
                          label='Price'
                          type='number'
                          placeholder='Enter Price'
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />

                        <Input
                          label='IGST'
                          type='number'
                          placeholder='Enter IGST'
                          value={igst}
                          onChange={(e) => setIgst(e.target.value)}
                        />
                        <Input
                          label='CGST'
                          type='number'
                          placeholder='Enter CGST'
                          value={cgst}
                          onChange={(e) => setCgst(e.target.value)}
                        />
                        <Input
                          label='SGST'
                          type='number'
                          placeholder='Enter SGST'
                          value={sgst}
                          onChange={(e) => setSgst(e.target.value)}
                        />

                        <BootstrapSwitchButton
                          checked={stockable}
                          onlabel='Admin User'
                          offlabel='Regular User'
                          onChange={() => setStockable(!stockable)}
                        />
                        <br></br>
                      </Col>
                    </Row>
                  </DialogModal>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProudctList;
