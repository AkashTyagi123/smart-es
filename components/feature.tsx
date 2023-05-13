import { ArrowTrendingUpIcon, ClockIcon, FingerPrintIcon, WrenchIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Advance Analytics',
    description:
      'With our advanced analytics feature, gain deep insights into exam performance like never before. Leverage sophisticated algorithms powered by machine learning to analyze and interpret exam results, identifying strengths, weaknesses, and patterns.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Quick Evaluation',
    description:
      'With Quick Evaluation, teachers can effortlessly assess exams, provide prompt feedback, and streamline the assessment process. Students benefit from immediate feedback, enabling them to track their progress and identify areas for improvement swiftly. ',
    icon: ClockIcon,
  },
  {
    name: 'Configurable exams',
    description:
      'The Configurable Exam feature empowers administrators and educators with unprecedented flexibility in designing customized exams. Tailor the assessment experience to meet specific requirements, allowing for the creation of unique question formats, time limits, and grading schemes',
    icon: WrenchIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Ensuring the highest level of exam integrity, our robust Security feature employs state-of-the-art measures to safeguard against cheating and ensure a fair testing environment. Powered by machine learning algorithms, it detects and flags suspicious activities such as unauthorized access, content leakage, and abnormal behavior patterns.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Evaluate faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for an Exam
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Intelligent Exam Analytics: Unlocking Insights for Enhanced Performance
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
