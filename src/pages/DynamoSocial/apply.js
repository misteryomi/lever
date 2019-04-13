import React from "react";

import SiteWrapper from "../../SiteWrapper";
import { Formik } from "formik";
import { Form, Grid, Page, Card, Button } from 'tabler-react';

function Apply() {
  return <SiteWrapper>
      <Page.Content>
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validate={values => {
                // same as above, but feel free to move this into a class method now.
                let errors = {};
                if (!values.email) {
                errors.email = "Required";
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                errors.email = "Invalid email address";
                }
                return errors;
            }}
            onSubmit={(
                values,
                { setSubmitting, setErrors /* setValues and other goodies */ }
            ) => {
                alert("Done!");
            }}
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (

            <Grid.Row>
                <Grid.Col width={6} offset={3}>

                    <Card>
                    <Card.Header>
                        <Card.Title>Create Application Profile</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Form.Group
                        isRequired
                        label="Channel ID"
                    >
                        <Form.Input name="channel-id" />
                    </Form.Group>
                    <Form.Group
                        isRequired
                        label="Mandate Number"
                    >
                        <Form.Input name="mandate-number" />
                    </Form.Group>
                    <Button
                            RootComponent="a"
                            block color="danger"
                            href="/social/applications"
                        >Go!
                        </Button>                    
                </Card.Body>
            </Card>                
         

                </Grid.Col>
            </Grid.Row>                

            )}
         />
        </Page.Content>
       </SiteWrapper>;
}

export default Apply;
