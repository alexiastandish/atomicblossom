"use client";

import { Address, CustomRequestData, User } from "@prisma/client";
import axios from "axios";
import ImageUploader from "../ImageUploader/ImageUploader";
import { FormProvider, useForm } from "react-hook-form";
import defaultValues from "./defaultValues.json";
import ItemTypeSelector from "./ItemTypeSelector";
import ItemLength from "./ItemLength";
import FlowerColor from "./FlowerColor";
import ResinTint from "./ResinTint";
import OverlayText from "../OverlayText";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../Button";
import { MdSave } from "react-icons/md";
import { uploadToFirebase } from "@/utils/helpers/uploadToFirebase";
import { idGenerator } from "@/utils/helpers/idGenerator";
import ShippingAddress from "./ShippingAddress";

// import "./styles.css";

export default function CustomRequestForm({
  currentUser,
}: {
  currentUser?: User;
}) {
  const test = async () => {
    const response = await axios.post(`/api/custom-request-form`);
    console.log("response", response);
  };

  const methods = useForm<CustomRequestData & { address: Address }>({
    defaultValues,
  });

  console.log("methods", methods);

  // id         String              @id @default(auto()) @map("_id") @db.ObjectId
  // userId     String              @db.ObjectId
  // createDate DateTime            @default(now())
  // content    CustomRequestData
  // status     CustomRequestStatus @default(UNFULFILLED)
  // address    Address?

  const onSubmit = async (data) => {
    console.log("data", data);
    const formSubmissionId = idGenerator();
    const firebaseUploads = await uploadToFirebase(
      data.images,
      formSubmissionId
    );
    console.log("firebaseUploads", firebaseUploads);
    // async request which may result error
    try {
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };

  const onErrors = (errors) => {
    console.log("errors", errors);
  };

  const discard = () => methods.reset();

  // bg-hero-pattern w-full h-[90vh] bg-cover bg-center hero min-h-[90vh] relative
  // todo: update form ui

  return (
    <section
      id="custom-request"
      className={`hero min-h-screen  bg-hero-pattern bg-white flex items-center justify-center relative `}
    >
      <div
        className="bg-white absolute top-0 w-screen h-10 z-3"
        style={{
          background:
            "linear-gradient(to bottom, white, rgba(255, 255, 255, 0))",
        }}
      />
      <div
        className="hero-content flex-col text-center lg:p-12 sm:p-6 p-3 xl:max-w-[80%] max-w-[100%] mt-16 
   "
      >
        {/* xl:bg-yellow-500 lg:bg-green-500 md:bg-blue-500 sm:bg-red-500  bg-pink-500 */}

        <div className="flex flex-col  items-center">
          <OverlayText
            textSize={8}
            textColor="white"
            className="h2"
            // style={{ fontSize: "3em" }}
          >
            Submit a Custom Request
          </OverlayText>
          <p className="md:py-6 py-4">
            TODO: Design your own flower shelf to be custom made with your
            design or submit a custom request for jewlery pieces. // TODO: add
            something about submissions status (Drafts are aditable)
          </p>
        </div>
        {/* <div className="flex items-center justify-center px-16 md:px-4  bg-white shadow-md w-full rounded-lg p-8"> */}
        <FormProvider {...methods}>
          <div className="my-2 bg-white bg-opacity-60 relative space-y-4  overflow-y-auto shadow-lg rounded-lg w-full">
            <form className="lg:p-12 sm:p-6 p-3 flex flex-col text-left">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-4">
                <Input
                  id="name"
                  label="Name"
                  // disabled={isLoading}
                  register={methods.register}
                  // errors={errors}
                  required
                />
                <Input
                  id="email"
                  label="Email"
                  // disabled={isLoading}
                  register={methods.register}
                  // errors={errors}
                  required
                />
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-4">
                <div>
                  <label>Product Type:</label>
                  <ItemTypeSelector />
                </div>

                <div>
                  <label>Flower Color:</label>
                  <FlowerColor />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <label>Product Length:</label>
                  <ItemLength />
                </div>

                <div>
                  <label>Resin Tint:</label>
                  <ResinTint />
                </div>
              </div>

              <ImageUploader currentUser={currentUser} />

              <div className="my-4">
                <TextArea
                  id="description"
                  label="Additional notes..."
                  // disabled={isLoading}
                  register={methods.register}
                  // errors={errors}
                  required
                />
              </div>
              <hr className="bg-slate-300 w-full h-[2px] rounded my-6" />
              <ShippingAddress />
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <Button
                  outline
                  small
                  primary
                  label="Cancel"
                  onClick={discard}
                />
                <Button
                  primary
                  small
                  label="Submit"
                  icon={MdSave}
                  onClick={methods.handleSubmit(onSubmit, onErrors)}
                />
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
    </section>
  );
}
