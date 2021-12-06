import React from 'react';
import { Field, Label, Hint, Input, Message } from '@zendeskgarden/react-forms';
import { useForm } from "react-hook-form";
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import styled from 'styled-components';

const SpacedRow = styled(Row)`
  margin: 50px 0px;
`

const colWidth = 10
const Form = ({ sendFormInfo }) =>{
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    sendFormInfo(data)
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SpacedRow justifyContent="start">
          <Col sm={colWidth}>
            <Field>
              <Label>File Name</Label>
              <Hint>File name of the Spreadsheet</Hint>
              <Input {...register("title",{ required: true })} validation={errors.title && 'error'} />
            </Field>
            {errors.title && <Message validation="error">A Title must be provided</Message>}
          </Col>
        </SpacedRow>
        <SpacedRow justifyContent="start">
          <Col sm={colWidth}>
            <Field>
              <Label>Worksheet Name</Label>
              <Hint>Title of the Worksheet in the Spreadsheet</Hint>
              <Input {...register("mainSheet",{ required: true })} validation={errors.mainSheet && 'error'} defaultValue="Sheet1"/>
            </Field>
            {errors.mainSheet && <Message validation="error">A Worksheet name must be provided</Message>}
          </Col>
        </SpacedRow>
        <SpacedRow justifyContent="start">
          <Col sm={colWidth}>
            <Field>
              <Label>File Column Width</Label>
              <Hint>The number of columns that should be present in the created instrument worksheets</Hint>
              <Input {...register("widthRows",{ required: true, pattern:/^[0-9]*$/ }) } validation={errors.widthRows && 'error'} defaultValue={12}/>
            </Field>
            {errors.widthRows && <Message validation="error">Must provide a number</Message>}
          </Col>
        </SpacedRow>
        <SpacedRow justifyContent="start">
          <Col sm={4}>
           <Button type='submit'>Submit</Button>
          </Col>
        </SpacedRow>
      </form>
    </div>
  );
}

export default Form;
