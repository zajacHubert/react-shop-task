import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/shop/shop-slice';
import { ModalContext } from '../../context/ModalContext';
import {
  AddButton,
  ErrorP,
  Form,
  FormAddProductContainer,
  Input,
  Label,
  Select,
  Title,
} from './FormAddProduct.styles';
import Modal from '../Modal/Modal';

type Inputs = {
  name: string;
  price: number;
  imgUrl: string;
  availabilityExpression: boolean;
};

const expression =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

const schema = yup.object({
  name: yup.string().min(4).max(30).required(),
  price: yup.number().min(1).required(),
  imgUrl: yup.string().matches(expression, 'Enter a valid URL').required(),
});

const FormAddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const modalCtx = useContext(ModalContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const productToAdd = {
      id: uuid(),
      name: data.name,
      price: Number(data.price),
      imgUrl: data.imgUrl,
      availability: !!data.availabilityExpression,
    };

    dispatch(addProduct(productToAdd));
    reset();
    modalCtx?.setMessage('Dodano nowy produkt');
    modalCtx?.setShowModal(true);
  };

  return (
    <>
      {modalCtx?.showModal && <Modal />}
      <FormAddProductContainer>
        <Title>Dodaj nowy produkt</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nazwa produktu</Label>
          <Input type="text" defaultValue="" {...register('name')} />
          {errors.name && <ErrorP>{errors.name.message}</ErrorP>}
          <Label>Cena produktu</Label>
          <Input
            type="number"
            step={0.01}
            defaultValue={0}
            {...register('price')}
          />
          {errors.price && <ErrorP>{errors.price.message}</ErrorP>}
          <Label>Adres URL zdjęcia</Label>
          <Input type="text" defaultValue="" {...register('imgUrl')} />
          {errors.imgUrl && <ErrorP>{errors.imgUrl.message}</ErrorP>}
          <Label>Dostepność</Label>
          <Select {...register('availabilityExpression')}>
            <option value={'true'}>Dostępny</option>
            <option value={''}>Niedostępny</option>
          </Select>
          <AddButton type="submit">Dodaj Produkt</AddButton>
        </Form>
      </FormAddProductContainer>
    </>
  );
};

export default FormAddProduct;
