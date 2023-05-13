import {useState} from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import ExamAnswers from './examAnswers'
import ExamBasicInfo from './examBasicInfo'
import ExamExplaination from './examExplaination'
import ExamQuestions from './examQuestions'
import TestAnalytics from './test_analytics'


export default function TestInfo() {

const [showBasicInfo, setShowBasicInfo] = useState(true);
const [showExamQuestions, setShowExamQuestions] = useState(false);
const [showExamAnswers, setShowExamAnswers] = useState(false);
const [showExamExplaination, setExamExplaination] = useState(false);
const [showExamAnalytics, setShowExamAnalytics] = useState(false);

const examInfoTab = [{
    "tabId":"basicInfo",
    "tabTitle":"Basic Info",
    "changeHandler": setShowBasicInfo,
    "isActive":showBasicInfo
},
{
    "tabId":"examQuestions",
    "tabTitle":"Questions",
    "changeHandler": setShowExamQuestions,
    "isActive":showExamQuestions
},
{
    "tabId":"examAnswers",
    "tabTitle":"Answers",
    "changeHandler": setShowExamAnswers,
    "isActive":showExamAnswers
},
{
    "tabId":"examAnswersExplaination",
    "tabTitle":"Explainations",
    "changeHandler": setExamExplaination,
    "isActive":showExamExplaination
},
{
    "tabId":"examAnalytics",
    "tabTitle":"Analytics",
    "changeHandler": setShowExamAnalytics,
    "isActive":showExamAnalytics
},



]

const handleExamInfoTabChangeEvent = (e) =>{
    examInfoTab.map(tab=>{
        if(tab.tabId === e.target.id){
            tab.changeHandler(true);
        }
        else{
            tab.changeHandler(false);
        }
    })
   
}
  return (

    <div className='pt-5 m-5 relative top-10'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Exam Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Showing informaton for {'<Exam name here>'}</p>
      </div>

    
<ul className="mt-5 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    {examInfoTab.map(tab=>{
        const classToApply = tab.isActive ? "inline-block p-4 text-white bg-indigo-600  active" : "inline-block p-4 text-indigo-600 bg-white  active";
        return <>
    <li className="mr-2" >
        <a id={tab.tabId} onClick={e=>handleExamInfoTabChangeEvent(e)} href="#" aria-current="page" className={classToApply}>{tab.tabTitle}</a>
    </li>
        </>
    })}
    
</ul>

{showBasicInfo ? <ExamBasicInfo/>: null}
{showExamQuestions ?<ExamQuestions/>: null}
{showExamAnswers ?<ExamAnswers/>: null}
{showExamExplaination ?<ExamExplaination/>: null}
{showExamAnalytics ?<TestAnalytics/>: null}
    </div>
  )
}
