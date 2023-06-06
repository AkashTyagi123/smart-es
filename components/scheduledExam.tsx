import { format, startOfToday } from "date-fns";

const posts = [
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
    startDate: "2023-06-09",
    endDate: "2023-06-10",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
    startDate: format(
      new Date(new Date().toISOString().split("T")[0]),
      "yyyy-MM-dd"
    ),
    endDate: format(
      new Date(new Date().toISOString().split("T")[0]),
      "yyyy-MM-dd"
    ),
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
    startDate: "startDateTime",
    endDate: "endDateTime",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
    startDate: "startDateTime",
    endDate: "endDateTime",
  },
];

export default function ScheduleExam({ selectedDate }) {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 overflow-scroll h-screen no-scrollbar"
    >
      {posts
        .filter((post) => {
          return selectedDate >= post.startDate && selectedDate <= post.endDate;
        })
        .map((post) => (
          <li key={post.title} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="min-w-0 ">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {post.title}
                </p>
                {/* <div>
                  <p>{format(post.startDate, "MMM dd, yyy")}</p>
                  <p>{post.endDate}</p>
                </div> */}
                <div>
                  <p>{`Start Date  - ${format(
                    new Date(post.startDate),
                    "MMM dd, yyy"
                  )}`}</p>
                  <p>{`End Date  - ${format(
                    new Date(post.endDate),
                    "MMM dd, yyy"
                  )}`}</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">{post.status}</p>
              </div>
              <button
                type="button"
                className="mt-2 inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                End Now
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}
