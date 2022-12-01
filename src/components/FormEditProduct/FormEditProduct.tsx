import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AddButton,
  ErrorP,
  Form,
  FormAddProductContainer,
  Input,
  Label,
  Select,
  Title,
} from '../FormAddProduct/FormAddProduct.styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct } from '../../features/shop/shop-slice';
import { ModalContext } from '../../context/ModalContext';

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

const FormEditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const products = useAppSelector((state) => state.shop.products);
  const { id } = useParams();
  const modalCtx = useContext(ModalContext);
  const productToEdit = products.find((item) => item.id === id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (id) {
      dispatch(
        editProduct({
          id,
          name: data.name,
          price: data.price,
          imgUrl: data.imgUrl,
          availability: !!data.availabilityExpression,
        })
      );
    }
    modalCtx?.setMessage('Zapisano zmiany');
    modalCtx?.setShowModal(true);
    navigate('/');
  };

  return (
    <FormAddProductContainer>
      <Title>Edytuj produkt</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Nazwa produktu</Label>
        <Input
          type="text"
          defaultValue={productToEdit?.name}
          {...register('name')}
        />
        {errors.name && <ErrorP>{errors.name.message}</ErrorP>}
        <Label>Cena produktu</Label>
        <Input
          type="number"
          step={0.01}
          defaultValue={productToEdit?.price}
          {...register('price')}
        />
        {errors.price && <ErrorP>{errors.price.message}</ErrorP>}
        <Label>Adres URL zdjęcia</Label>
        <Input
          type="text"
          defaultValue={productToEdit?.imgUrl}
          {...register('imgUrl')}
        />
        {errors.imgUrl && <ErrorP>{errors.imgUrl.message}</ErrorP>}
        <Label>Dostepność</Label>
        <Select
          {...register('availabilityExpression')}
          defaultValue={productToEdit?.availability ? 'true' : ''}
        >
          <option value={'true'}>Dostępny</option>
          <option value={''}>Niedostępny</option>
        </Select>
        <AddButton type="submit">Zapisz produkt</AddButton>
      </Form>
    </FormAddProductContainer>
  );
};

export default FormEditProduct;
