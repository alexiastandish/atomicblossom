import Container from "@/components/Container";
import { collections } from "@/utils/constants/collections";
import OverlayText from "@/components/OverlayText";
import getCollectionProducts from "@/actions/getCollectionProducts";
import CollectionsProductCard from "@/components/collections/CollectionsProductCard";
import styles from "../collection.module.scss";

type IParams = {
  collectionId: string;
};

export default async function page({ params }: { params: IParams }) {
  const collection = await getCollectionProducts(params.collectionId);

  return (
    <div className="p-8">
      <Container>
        <div>
          <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
              <OverlayText
                textAlign="left"
                textColor="primary"
                className={styles.collectionHeader}
              >
                {params.collectionId}
              </OverlayText>
            </div>

            <div className="relative mt-8">
              <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <ul
                  role="list"
                  className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                >
                  {collection?.products.map((product) => {
                    return <CollectionsProductCard product={product} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
