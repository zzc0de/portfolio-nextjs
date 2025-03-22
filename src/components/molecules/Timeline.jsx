import Image from "next/image";
import Link from "next/link";

const Timeline = ({ pattern }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {pattern.map((item, index) => (
        <li className="mb-10 ms-4 flex flex-col gap-2" key={index}>
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.time}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {item.desc}
          </p>
          <div className="flex gap-2">
            {Array.isArray(item.icon) &&
              item.icon?.map((items, index) => (
                <Image
                  key={index}
                  src={items.path}
                  width={30}
                  height={20}
                  alt={items.alt}
                  className={items.className}
                />
              ))}
          </div>
          {item?.buttonLink && (
            <Link
              className="bg-white w-fit rounded-sm text-black py-1 px-6 hover:bg-slate-500 hover:text-white transition duration-500"
              href={item?.buttonLink}
            >
              {item.buttonText}
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
