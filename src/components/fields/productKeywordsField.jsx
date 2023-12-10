import { Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Error from "../errorMessage";
import keywords from "../../data/keywordsOptions.json";
import { colorStyles } from "../../styles/keywordWelectStyles";

const ProductKeywords = ({ error, control }) => {
  const { message } = error || {};

  return (
    <div className="field_wrapper">
      <label>Product Keywords</label>
      <Controller
        control={control}
        name="product_keywords"
        render={({ field: { onChange, ref } }) => (
          <CreatableSelect
            defaultValue={[]}
            inputRef={ref}
            onChange={(val) => onChange(val)}
            isMulti
            options={keywords}
            styles={colorStyles}
          />
        )}
      />

      <Error error={message} />
    </div>
  );
};

export default ProductKeywords;
