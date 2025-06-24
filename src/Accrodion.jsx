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
          <DisclosureButton className="w-full min-h-[64px] flex justify-center items-center px-8 py-4 bg-gray-100 border-b-gray-400 rounded-lg mb-2 transition-all duration-200 shadow font-semibold text-lg gap-3">
            <span className="m-9 p-2 px-4 cursor-pointer">
              ({data.itemCards.length}) {data.title}
            </span>
            <ChevronDownIcon
              className={`h-7 w-7 ml-4 text-gray-500 transition-transform cursor-pointer ${
                open ? "rotate-180" : ""
              }`}
            />
          </DisclosureButton>
          <DisclosurePanel className="p-16 flex justify-center bg-gray-50 rounded-sm ">
            <ul className="space-y-6 max-w-2xl mx-auto">
              {data.itemCards?.map((item) => (
                <li
                  key={item.card.info.id}
                  className="flex flex-col justify-evenly  md:flex-row items-center md:items-start bg-white rounded-xl shadow p-8 gap-8 w-[900px] relative right-[90px] "
                >
                  <div className="flex-1 w-full  ">
                    <div className="flex items-center justify-between mb-10 ">
                      <span className="text-base font-semibold text-gray-800">
                        {item.card.info.name}
                      </span>
                      <span className="text-orange-600 font-bold">
                        ₹
                        {(item.card.info.price ?? item.card.info.defaultPrice) /
                          100}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.card.info.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 justify-evenly">
                    <img
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        (item.card.info.imageId ?? item.card.info.id)
                      }
                      className="w-[120px] h-[90px] object-cover  rounded-lg border border-orange-100 shadow cursor-pointer  "
                      alt={item.card.info.name}
                    />
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
