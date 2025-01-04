import getCurrentUser from "@/actions/getCurrentUser";
import CartClient from "./CartClient";
import Container from "@/components/Container";
export const dynamic = "force-dynamic";

export default function Cart(props) {
  const currentUser = getCurrentUser();
  return (
    <div className="pt-8">
      <Container>
        <CartClient currentUser={currentUser} />
      </Container>
    </div>
  );
}
