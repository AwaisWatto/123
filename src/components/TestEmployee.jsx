import React from 'react';
import { useForm } from 'react-hook-form';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function FormApp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <Container>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Row className='mb-3'>
      <input class="tabledit-view-mode" type="text" placeholder="First Name" {...register("First Name", {required: true, maxLength: 100})} /></Row>
      <Row className='mb-3'><input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /></Row>
      <Row className='mb-3'><input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /></Row>
      {/* <Row className='mb-3'><select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select></Row> */}

      <Row className='mb-3'><input {...register("Developer", { required: true })} type="radio" value="Yes" /></Row>
      <Row className='mb-3'><input {...register("Developer", { required: true })} type="radio" value="No" /></Row>
      <Row className='mb-3'><input type="datetime" placeholder="sdfsfsa" {...register("sdfsfsa", {})} /></Row>
      <Row className='mb-3'><input type="undefined" placeholder="Muhammad Talha" {...register} /></Row>

      <Row><Col><input type="submit" /></Col><Col></Col></Row>
    </form>
    </Container>
  );
}