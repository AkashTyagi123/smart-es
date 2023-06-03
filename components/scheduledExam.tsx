const posts = [
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
  {
    title: "AI the known threat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit provident nostrum voluptas, assumenda nisi quas fugit eum quis magnam aliquid odio? Architecto exercitationem nemo saepe repudiandae odit ex neque?",
    scheduledOn: ["Linkedin", "Twitter", "instagram", "facebook"],
    status: "scheduled",
  },
];

export default function ScheduleExam() {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 overflow-scroll h-screen no-scrollbar"
    >
      {posts.map((post) => (
        <li key={post.title} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 ">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {post.title}
              </p>
              <div>
                <p>startDateTime</p>
                <p>endDateTime</p>
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
