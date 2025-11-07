import './Tabs.scss'
import classNames from "classnames";
import getParams from "@/utils/getParams.js";
import getTabsElementsFromTitle from "@/components/Tabs/utils/getTabsElementsFromTitle.js";
import TabsNavigations from "./components/TabsNavigations/index.js";

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
  } = props

  return (
    <div
      className={classNames(className, 'tabs')}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && (
        <TabsNavigations title={title} items={items} />
      )}
      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            title,
            children,
            isActive
          } = item;

          const { buttonId, contentId } = getTabsElementsFromTitle(title);

          return (
            <div className={classNames('tabs__content',{
              'is-active': isActive,
            })}
            id={contentId}
                 aria-labelledby={buttonId}
            tabIndex={0}
            data-js-tabs-content=""
            key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs