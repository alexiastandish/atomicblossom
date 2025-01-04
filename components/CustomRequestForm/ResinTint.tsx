import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./CustomRequestForm.module.scss";
import { useController, useFormContext } from "react-hook-form";

export default function ResinTint() {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: "resinTint",
    control,
    rules: { required: true },
  });

  return (
    <div>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          onClick={() => field.onChange("CLEAR")}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
        >
          CLEAR
        </button>
        <button
          onClick={() => field.onChange("BLACK")}
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
        >
          BLACK
        </button>
      </div>

      {/* <RadioGroup.Root
        value={field.value}
        className={styles.RadioGroupRoot}
        aria-label="View density"
        onValueChange={(option) => field.onChange(option)}
      >
        <div className={styles.radioGroupSection}>
          <RadioGroup.Item
            className={styles.RadioGroupItem}
            value="CLEAR"
            id="rClear"
          >
            <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className="Label" htmlFor="rClear">
            Clear
          </label>
        </div>
        <div className={styles.radioGroupSection}>
          <RadioGroup.Item
            className={styles.RadioGroupItem}
            value="BLACM"
            id="rBlack"
          >
            <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className="Label" htmlFor="rBlack">
            Black
          </label>
        </div>
      </RadioGroup.Root> */}
    </div>
  );
}

// dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
