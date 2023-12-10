import { useForm } from "react-hook-form";
import { logFormData } from "../utilities/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import validetionObj from "./validationSchema";
import ProductTitle from "./fields/productTitleField";
import ProductDescription from "./fields/productDescriptionField";
import ProductBullets from "./fields/bullets/productBulletsField";
import ProductKeywords from "./fields/productKeywordsField";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm({ resolver: zodResolver(validetionObj) });

  const {
    product_title,
    product_description,
    product_bullets,
    product_keywords,
  } = errors;

  return (
    <form className="form" onSubmit={handleSubmit(logFormData)}>
      <Stack className="form-column-wrapper">
        <ProductTitle register={register} error={product_title} />
        <ProductDescription error={product_description} setValue={setValue} />
        <ProductBullets error={product_bullets} control={control} />
        <ProductKeywords error={product_keywords} control={control} />
      </Stack>
      <Button className="submit-btn" type="submit" variant="primary">
        Add Product
      </Button>
    </form>
  );
};

export default Form;
