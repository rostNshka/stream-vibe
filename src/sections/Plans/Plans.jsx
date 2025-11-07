import Sections from "@/layouts/Sections/index.js";
import Grid from "@/components/Grid";
import planGroup from "@/sections/Plans/planGroup.js";
import PlanCard from "@/components/PlanCard/index.js";
import TabsNavigations from "@/components/Tabs/components/TabsNavigations/index.js";
import Tabs from "@/components/Tabs/Tabs.jsx";

const Plan = () => {
  const tabsTitle = 'plans-title'
  const tabsNavigationId = 'plans-tabs-navigation'

  return (
    <Sections
      title="Choose the plan that's right for you"
      titleId="plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={(
        <TabsNavigations
          id={tabsNavigationId}
          title={tabsTitle}
          items={planGroup}
        />
      )}
    >
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={planGroup.map((planItem, index) => ({
          title: planItem.title,
          isActive: planItem.isActive,
          children: (
            <Grid columns={3}>
              {planItem.items.map((planItem, index) => (
                <PlanCard
                  {...planItem}
                  key={index}
                />
              ))}
            </Grid>
          ),
        }))}
      />
    </Sections>
  )
}

export default Plan