// import { Menu, Transition } from '@headlessui/react'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { useState } from 'react'

const meetings = [
  {
    id: 1,
    title: 'Luke 11:3 says, "Give us day by day our daily bread."',
    startDatetime: '2022-11-01',
    endDatetime: '2022-11-01',
    text: `Luke 11:3 is part of what we call the Lord's Prayer but is really the "Disciple's Prayer" as the prayer that Jesus taught was for the disciples!  You may recall that in Luke 11:1 that as He was praying ONE of His DISCIPLES asked that He teach them to pray!  What followed are some of the best instructions a person can ever learn when it comes to PRAYER! I suspect many of you can quote by memory but just in case this is what Jesus taught`,
  },

  {
    id: 2,
    title: 'Michael 11:3 says, "Give us day by day our daily Food."',
    startDatetime: '2022-11-02',
    endDatetime: '2022-11-02',
    text: `MicLukehael 11:3 is part of what we call the Lord's Pr text: 'Today we will look into the details of ',ayer but is really the "Disciple's Prayer" as the prayer that Jesus taught was for the disciples!  You may recall that in Luke 11:1 that as He was praying ONE of His DISCIPLES asked that He teach them to pray!  What followed are some of the best instructions a person can ever learn when it comes to PRAYER! I suspect many of you can quote by memory but just in case this is what Jesus taught`,
  },
  {
    id: 3,
    title: 'Drike 11:3 says, "Give us day by day our daily milk."',
    startDatetime: '2022-11-03',
    endDatetime: '2022-11-03',
    text: `Drike 11:3 is part of what we call the Lord's Prayer but is really the "Disciple's Prayer" as the prayer that Jesus taught was for the disciples!  You may recall that in Luke 11:1 that as He was praying ONE of His DISCIPLES asked that He teach them to pray!  What followed are some of the best instructions a person can ever learn when it comes to PRAYER! I suspect many of you can quote by memory but just in case this is what Jesus taught`,
  },
  {
    id: 4,
    title: 'Alexander says, "Give us day by day our daily bread."',
    startDatetime: '2022-11-04',
    endDatetime: '2022-11-04',
    text: `Alexander 11:3 is part of what we call the Lord's Prayer but is really the "Disciple's Prayer" as the prayer that Jesus taught was for the disciples!  You may recall that in Luke 11:1 that as He was praying ONE of His DISCIPLES asked that He teach them to pray!  What followed are some of the best instructions a person can ever learn when it comes to PRAYER! I suspect many of you can quote by memory but just in case this is what Jesus taught`,
  },
  {
    id: 5,
    title: 'Michael 20:3 says, "Give us day by day our daily bread."',
    startDatetime: '2022-11-05',
    endDatetime: '2022-11-05',
    text: `Michael 11:3 is part of what we call the Lord's Prayer but is really the "Disciple's Prayer" as the prayer that Jesus taught was for the disciples!  You may recall that in Luke 11:1 that as He was praying ONE of His DISCIPLES asked that He teach them to pray!  What followed are some of the best instructions a person can ever learn when it comes to PRAYER! I suspect many of you can quote by memory but just in case this is what Jesus taught`,
  },
  {
    id: 6,
    title: 'Mike 11:3 says, "Give us day by day our daily wine."',
    startDatetime: '2022-11-06',
    endDatetime: '2022-11-06',
    text: `Mike 11:3 is part of what we call the Lord's Prayer but is really the "Disciple's Prayer" as the prayer that Jesus taught was for the disciples!  You may recall that in Luke 11:1 that as He was praying ONE of His DISCIPLES asked that He teach them to pray!  What followed are some of the best instructions a person can ever learn when it comes to PRAYER! I suspect many of you can quote by memory but just in case this is what Jesus taught`,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-7 md:max-w-7xl md:px-6">
      {/* Design head */}
      <h1 className="py-5 text-center text-2xl font-bold">DATE THE WORLD</h1>
      {/* Calender starting  */}
      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-7 md:max-w-6xl md:px-6">
          <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
            <div className="md:pr-14">
              <div className="flex items-center">
                <h2 className="flex-auto font-semibold text-gray-900">
                  {format(firstDayCurrentMonth, 'MMMM yyyy')}
                </h2>
                <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
              <div className="mt-2 grid grid-cols-7 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      'py-1.5'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && 'text-white',
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          'text-red-500',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-900',
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          'text-gray-400',
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          'bg-red-500',
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          'bg-gray-900',
                        !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          'font-semibold',
                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                      )}
                    >
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </button>

                    <div className="mx-auto mt-1 h-1 w-1">
                      {meetings.some((news) =>
                        isSameDay(parseISO(news.startDatetime), day)
                      ) && (
                        <div className="h-1 w-1 rounded-full bg-sky-500"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <section className="mt-12 md:mt-0 md:pl-14">
              <h2 className="font-semibold text-gray-900">
                Verse to DATE the Word on{' '}
                <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                  {format(selectedDay, 'MMM dd, yyy')}
                </time>
              </h2>
              <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                {selectedDayMeetings.length > 0 ? (
                  selectedDayMeetings.map((news) => (
                    <News news={news} key={news.id} />
                  ))
                ) : (
                  <p>No verse for today.</p>
                )}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

function News({ news }) {
  //   let startDateTime = parseISO(news.startDatetime)
  //   let endDateTime = parseISO(news.endDatetime)

  return (
    <li className="group flex items-center space-x-4 rounded-xl px-4 py-2">
      <div className="flex-auto">
        <p className="font-bold text-gray-900">{news.title}</p>

        <p className="pt-2">{news.text}</p>
      </div>
    </li>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
