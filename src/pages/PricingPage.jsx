import { Fragment } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import PricingCard from "../components/PricingCard";

const PricingPage = () => {
  return (
    <PageContainer>
      <Fragment>
        <section className="pricing">
          <PricingCard title="basic" />
          <PricingCard title="standard" />
          <PricingCard title="premium" />
        </section>
      </Fragment>
    </PageContainer>
  );
};
export default PricingPage;
