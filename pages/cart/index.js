import React from "react";
import { SinglePage } from "../../components/shared/layouts";
import { MainBody } from "../../components/shared/main-body";

const Cart = () => {
  return (
    <SinglePage showSubHeader={false}>
      <MainBody>
        <div className="min-h-[250px] pt-40">Cart Is Empty</div>
      </MainBody>
    </SinglePage>
  );
};

export default Cart;
