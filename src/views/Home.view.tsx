import { useState } from "react";
import CarouselComponent from "../components/Carousel.component";
import HeaderComponent from "../components/Header.component";
import LoadingView from "./Loading.view";
import SubHeroSectionComponent from "../components/SubHeroSection.component";
import CategoriesComponent from "../components/Categories.component";
import SpecialDealsCarouselComponent from "../components/SpecialDealsCarousel.component";
import ProductListComponent from "../components/ProductsList.component";
import ServicesComponent from "../components/Services.component";
import EventComponent from "../components/Events.component";

const HomeView = () => {

     const [isLoading, setIsLoading] = useState<boolean>(true);

     setTimeout(() => {
          setIsLoading(false);
          return () => clearTimeout(0);
     }, 2000);

     if (isLoading) return <LoadingView />;

     return (
          <>
               <HeaderComponent />
               <CarouselComponent />
               <SubHeroSectionComponent />
               <CategoriesComponent />
               <ProductListComponent title="Products" />
               <SpecialDealsCarouselComponent />
               <ProductListComponent title="Latest Products" />
               <ServicesComponent />
               <EventComponent />
          </>
     );

}

export default HomeView;