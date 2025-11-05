import './Categories.scss'
import Sections from "@/layouts/Sections";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from "@/sections/Categories/categoryItems";

const Categories = () => {

    const sliderNavigationId = "categories-slider-navigation"

    return (
        <Sections
            title="Explore our wide variety of categories"
            titleId="categories-title"
            description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            actions={(
                <SliderNavigation
                    mode="tile"
                    id={sliderNavigationId}
                />
            )}
            isActionsHiddenOnMobile
        >
            <Slider
                navigationTargetElementId={sliderNavigationId}
            >
                {categoryItems.map((categoryItem,index) => (
                    <CategoryCard
                        {...categoryItem}
                        key={index}
                    />
                ))}
            </Slider>
        </Sections>
    )
}

export default Categories