import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "../inputs/Input";

export default function ShippingAddress(props) {
  const { register } = useFormContext();
  return (
    <div>
      <div className="mb-6">
        <div className="mt-4">
          <Input
            id="address.address"
            label="Address (Include Unit if Applicable)"
            // disabled={isLoading}
            register={register}
            // errors={errors}
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <Input
            id="address.city"
            label="City"
            // disabled={isLoading}
            register={register}
            // errors={errors}
            required
          />
          <Input
            id="address.state"
            label="State"
            // disabled={isLoading}
            register={register}
            // errors={errors}
            required
          />
          <Input
            id="address.zip"
            label="Zip"
            // disabled={isLoading}
            register={register}
            // errors={errors}
            required
          />
        </div>
      </div>
    </div>
  );
}
