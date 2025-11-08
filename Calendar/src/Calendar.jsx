import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import 'temporal-polyfill/global'
import '@schedule-x/theme-default/dist/index.css'
import { useEffect, useState } from 'react'
import Event from './Event'

 
function Calendar() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    views: [createViewMonthGrid()],
    events: [
      {
        id: '1',
        title: 'Handover_2025-11-03',
        start: Temporal.PlainDate.from('2025-11-03'),
        end: Temporal.PlainDate.from('2025-11-03'),
      },
      {
        id: '2',
        title: 'Handover_2025-11-04',
        start: Temporal.PlainDate.from('2025-11-04'),
        end: Temporal.PlainDate.from('2025-11-04'),
      },
    ],
    selectedDate:Temporal.Now.plainDateISO(),
    plugins: [eventsService]
  })
 
  useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])
 
  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar}
      customComponents={{
        monthGridEvent:Event
      }} />
    </div>
  )
}
 
export default Calendar