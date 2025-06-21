import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Accrodion = ({ data }) => (
  <div className="my-6">
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="w-full min-h-[64px] flex justify-center items-center px-8 py-4 bg-gray-100   border-b-gray-400 rounded-lg mb-2 transition-all duration-200 shadow font-semibold text-lg gap-3">
            <span className="m-9 p-2 px-4 cursor-pointer  ">
              ({data.itemCards.length}){data.title}
            </span>
            <ChevronDownIcon
              className={`h-7 w-7 ml-4 text-gray-500 transition-transform cursor-pointer ${
                open ? "rotate-180" : ""
              }`}
            />
          </DisclosureButton>
          <DisclosurePanel className="p-6 bg-gray-50 rounded-lg">
            <ul className="space-y-3">
              {data.itemCards?.map((item) => (
                <li
                  key={item.card.info.id}
                  className="text-base font-medium  p-2.5 m-3   gap-1.5"
                >
                  {" "}
                  {item.card.info.name} - ₹
                  {(item.card.info.price ?? item.card.info.defaultPrice) / 100}
                  <p className="text-sm  text-gray-500 mt-2 p-3 align-middle">
                    {item.card.info.description}
                  </p>
                  <div>
                    {" "}
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        item.card.info.imageId
                          ? item.card.info.imageId
                          : item.card.info.id
                      }
                      className="w-full"
                    ></img>
                  </div>
                </li>
              ))}
            </ul>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  </div>
);

export default Accrodion;
