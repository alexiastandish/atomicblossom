import * as Slider from "@radix-ui/react-slider";
import cx from "classnames";
import { useController, useFormContext } from "react-hook-form";

export default function ItemLength() {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: "length",
    control,
    rules: { required: true },
  });

  return (
    <div>
      {field.value} inches
      <Slider.Root
        defaultValue={[field.value]}
        max={26}
        min={3}
        value={[field.value]}
        step={1}
        onValueChange={(size) => field.onChange(size)}
        aria-label="value"
        className="relative flex h-5 w-64 touch-none items-center"
      >
        <Slider.Track className="relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800">
          <Slider.Range className="absolute h-full rounded-full bg-purple-600 dark:bg-white" />
        </Slider.Track>
        <Slider.Thumb
          className={cx(
            "block h-5 w-5 rounded-full bg-purple-600 dark:bg-white",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        />
      </Slider.Root>
    </div>
  );
}
