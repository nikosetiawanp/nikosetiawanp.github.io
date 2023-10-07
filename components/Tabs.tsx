import { Tab } from "@headlessui/react";
import Kanban from "../images/kanban.png";
import Feedback from "../images/feedback.png";
import Image from "next/image";
import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState(1);
  return (
    <Tab.Group>
      <Tab.List className={`flex gap-4`}>
        <Tab
          className={`text-[18px] ${active == 1 && "text-[#FFC727]"}`}
          onClick={() => setActive(1)}
        >
          Project 1
        </Tab>
        <Tab
          className={`text-[18px] ${active == 2 && "text-[#FFC727]"}`}
          onClick={() => setActive(2)}
        >
          Project 2
        </Tab>
      </Tab.List>
      <Tab.Panels className={`py-0 -mb-8`}>
        <Tab.Panel className={``}>
          <Image className="" src={Feedback} alt="" />
        </Tab.Panel>
        <Tab.Panel>
          <Image className="" src={Kanban} alt="" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
