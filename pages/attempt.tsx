import Header from '@/components/header'
import React from 'react'
const questions = [
    {
        "question": "What temperature does water boil at?",
        "optionA": "50 degrees Celcius",
        "optionB": "25 degrees Celcius",
        "optionC": "100 degrees Celcius",
        "optionD": "150 degrees Celcius",
        "answer": "100 degrees Celcius"
    },

    {
        "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
        "optionA": "Wole Soyinka",
        "optionB": "William Shakespeare",
        "optionC": "Ngozi Chimamanda Adichie",
        "optionD": "Dan Brown",
        "answer": "William Shakespeare"
    },

    {
        "question": "What did the crocodile swallow in Peter Pan?",
        "optionA": "A Book",
        "optionB": "A Computer",
        "optionC": "A pair of shoes",
        "optionD": "Alarm Clock",
        "answer": "Alarm Clock"
    },

    {
        "question": "Which is the only mammal that can’t jump?",
        "optionA": "Dog",
        "optionB": "Elephant",
        "optionC": "Goat",
        "optionD": "Lion",
        "answer": "Elephant"
    },

    {
        "question": "Who lived at 221B, Baker Street, London?",
        "optionA": "Tony Stark",
        "optionB": "Morgan Freeman",
        "optionC": "Sherlock Holmes",
        "optionD": "Samuel L. Jackson",
        "answer": "Sherlock Holmes"
    },

    {
        "question": "What colour is a panda?",
        "optionA": "Green and Yellow",
        "optionB": "Blue and Red",
        "optionC": "Green and White",
        "optionD": "Black and White",
        "answer": "Black and White"
    },

    {
        "question": "Where is the smallest bone in the human body?",
        "optionA": "The Chest",
        "optionB": "The Ear",
        "optionC": "The Legs",
        "optionD": "The Hands",
        "answer": "The Ear"
    },

    {
        "question": "What does the roman numeral C represent?",
        "optionA": "100",
        "optionB": "10",
        "optionC": "10,000",
        "optionD": "1,000,000",
        "answer": "100"
    },

    {
        "question": "What takes place in Hong Kong's Happy Valley?",
        "optionA": "Chicken Wrestling",
        "optionB": "Horse racing",
        "optionC": "Street Racing",
        "optionD": "Arm Wrestling",
        "answer": "Horse racing"
    },

    {
        "question": "Who painted the Mona Lisa?",
        "optionA": "Alexander Graham Bell",
        "optionB": "Sir Isaac Newton",
        "optionC": "Leonardo Da Vinci",
        "optionD": "Albert Einstein",
        "answer": "Leonardo Da Vinci"
    },

    {
        "question": "What’s the most important book in the Moslem religion?",
        "optionA": "The Koran",
        "optionB": "The Dictionary",
        "optionC": "The Bible",
        "optionD": "The Chemistry text Book",
        "answer": "The Koran"
    },

    {
        "question": "What’s the capital of Ethiopia?",
        "optionA": "Cape Town",
        "optionB": "San Francisco",
        "optionC": "Abuja",
        "optionD": "Syndey",
        "answer": "Addis Ababa"
    },

    {
        "question": "How many squares are there on a chess board?",
        "optionA": "128",
        "optionB": "64",
        "optionC": "32",
        "optionD": "256",
        "answer": "64"
    },

    {
        "question": "Who invented the electric light bulb?",
        "optionA": "Tom Cruise",
        "optionB": "Barack Obama",
        "optionC": "Wole Soyinka",
        "optionD": "Thomas Edison",
        "answer": "Thomas Edison"
    },

    {
        "question": "What are the first three words of the bible?",
        "optionA": "be with everyone",
        "optionB": "Again Jesus asked",
        "optionC": "In the beginning",
        "optionD": "At that time",
        "answer": "In the beginning"
    },

    {
        "question": "What are the first three words of the bible?",
        "optionA": "be with everyone",
        "optionB": "Again Jesus asked",
        "optionC": "In the beginning",
        "optionD": "At that time",
        "answer": "In the beginning"
    },

    {
        "question": "What are the first three words of the bible?",
        "optionA": "be with everyone",
        "optionB": "Again Jesus asked",
        "optionC": "In the beginning",
        "optionD": "At that time",
        "answer": "In the beginning"
    }
]
function attempt() {
  return (
    <>
     <Header/>
    <div className='pt-5 mt-5 relative top-10 shadow-lg'>
    <div className='flex'>
    <div className='h-screen w-1/3 border-r border-grey-600 overflow-scroll'>
        <div className='text-center p-5'>
        <p className='text-4xl p-3'>Introduction to Nobel gases</p>
        <div className='text-left p-3'>
            <p>Directions</p>
            <ul className='list-decimal text-gray-600'>
               <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores praesentium quae culpa eos nesciunt sunt, laudantium dolorum a odio porro ipsa, voluptatibus architecto iste suscipit laborum numquam impedit in.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates cumque asperiores nulla maiores explicabo accusamus, ullam dignissimos, tempora repudiandae consectetur cupiditate sint animi dolore ab eveniet perspiciatis ipsam id.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem quis quia unde perferendis aperiam repellendus cupiditate nemo odio, mollitia recusandae deserunt iste ea rem, harum aut blanditiis molestiae! Nulla?</li>
               
             
                
            </ul>
        </div>

        <div className='text-left p-3 mt-5'>
        <p>Examiner Note</p>
            <ul className='list-decimal text-gray-600'>
               <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores praesentium quae culpa eos nesciunt sunt, laudantium dolorum a odio porro ipsa, voluptatibus architecto iste suscipit laborum numquam impedit in.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates cumque asperiores nulla maiores explicabo accusamus, ullam dignissimos, tempora repudiandae consectetur cupiditate sint animi dolore ab eveniet perspiciatis ipsam id.</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem quis quia unde perferendis aperiam repellendus cupiditate nemo odio, mollitia recusandae deserunt iste ea rem, harum aut blanditiis molestiae! Nulla?</li>
               
             
                
            </ul>
        </div>


        </div>

    </div>

    <div className='h-screen w-2/3 overflow-scroll p-7'>
        <p>Question 1/10</p>
        <p className='text-2xl mt-3'>Who invented the electric light bulb?</p>
        <div className="flex h-6 items-center mt-3 shadow-md p-9">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

<div className="text-sm leading-6 ml-3">
                 
                    <p className="text-gray-500">Check this box if you want to allow candidates to attempt test multiple times</p>
                  </div>
                  </div>

                  <div className="flex h-6 items-center mt-3 shadow-md p-9">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

<div className="text-sm leading-6  ml-3">
                 
                    <p className="text-gray-500">Check this box if you want to allow candidates to attempt test multiple times</p>
                  </div>
                  </div>


                  <div className="flex h-6 items-center mt-3 shadow-md p-9">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

<div className="text-sm leading-6 ml-3">
                 
                    <p className="text-gray-500">Check this box if you want to allow candidates to attempt test multiple times</p>
                  </div>
                  </div>


                  <div className="flex h-6 items-center mt-3 shadow-md p-9">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

<div className="text-sm leading-6 ml-3">
                 
                    <p className="text-gray-500">Check this box if you want to allow candidates to attempt test multiple times</p>
                  </div>
                  </div>

                 <div className="flex space-between">
                 <button className='mt-3 p-2 flex-auto rounded-none  bg-indigo-600 text-white lg'>Next</button>
                  <button className='mt-3 ml-3 p-2 flex-auto rounded-none  bg-indigo-600 text-white lg'>Previous</button>
                 </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default attempt