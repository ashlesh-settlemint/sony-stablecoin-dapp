'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Details, Header, PermissionManagement, ProofOfReserve, Review } from '@stablecoin-app/ui-elements';
import { LeftNav } from '@stablecoin-app/ui-elements';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currenttabkey,setCurrenttabkey] = useState(0)
  
  const handleNext = (key : number) => {
      console.log(key);
     setCurrenttabkey(key);
  };
  return (
    <>      
      <div className={styles.page}>
        <Header />
        <div className="wrapper">
          <div className="container-fluid">
            <LeftNav />
            <div className="content-area">
              <div className="">
                <div className="heading-area">
                  <h1>Create New Stable Coin</h1>
                </div>

                <Tabs
                  defaultActiveKey={currenttabkey}
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey={0} title="Stable coin details">
                    <Details handleNext={handleNext} />
                  </Tab>
                  <Tab eventKey={1} title="Manage Permissions">
                    <PermissionManagement />
                  </Tab>
                  <Tab eventKey={2} title="Proof Of Reserve">
                    <ProofOfReserve />
                  </Tab>
                  <Tab eventKey={3} title="Review">
                    <Review />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
