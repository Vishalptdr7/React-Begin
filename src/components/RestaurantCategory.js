import { useState } from "react";
const RestautantCategory=(data)=>{
    console.log(data)

    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
      setOpenItem(openItem === index ? null : index);
    };

    const data = [
      {
        title: "Description",
        content: `ZOE™ is a simple and understated stackable shell chair with lots
        of personality and character that is as beautiful when seen from
        below as from above. The frame is discretely tucked into the
        chair's molded shell, and the shell's tapering thickness gives it
        a friendly expression.`,
      },
      {
        title: "Characteristics",
        content: `ZOE™ is a simple and understated stackable shell chair with lots of
        personality and character that is as beautiful when seen from below as from
        above. The frame is discretely tucked into the chair's molded shell, and the
        shell's tapering thickness gives it a friendly expression.`,
      },
      {
        title: "Reviews",
        content: `ZOE™ is a simple and understated stackable shell chair with lots
        of personality and character that is as beautiful when seen from
        below as from above. The frame is discretely tucked into the
        chair's molded shell, and the shell's tapering thickness gives it
        a friendly expression.`,
      },
    ];

    return (
      <div className="w-full border divide-y divide-gray-200 dark:divide-white/10">
        {data.map((item, index) => (
          <div
            key={index}
            className="py-4 border-b border-gray-200 dark:border-white/10"
          >
            <h2>
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left font-bold text-navy-900 dark:text-white focus:outline-none"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    openItem === index ? "rotate-180" : ""
                  } text-navy-900 dark:text-white`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            {openItem === index && (
              <div className="mt-2 text-left text-medium text-navy-900 dark:text-white">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
}
export default RestautantCategory;