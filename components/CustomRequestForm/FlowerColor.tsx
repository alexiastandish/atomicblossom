import Circle from "@uiw/react-color-circle";
import { useController, useFormContext } from "react-hook-form";

export default function FlowerColor() {
  const { control } = useFormContext();

  const { field } = useController({ name: "flowerColor", control });
  return (
    <div>
      <Circle
        colors={["#F44E3B", "#FE9200", "#FCDC00", "#DBDF00"]}
        color={field.value}
        onChange={(color) => {
          field.onChange(color.hex);
        }}
      />
    </div>
  );
}
