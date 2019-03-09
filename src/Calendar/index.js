import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import moment from 'moment'
import Modal from '../Modal'
import events from './events'
import './index.css'

moment.locale(navigator.language, {
  week: {
    dow: 1
  },
});
const localizer = BigCalendar.momentLocalizer(moment)
const formats = {
  timeGutterFormat: 'H:mm',
  agendaTimeFormat: 'H:mm',
  agendaHeaderFormat: ({ start, end }, culture, local) => (
    `${local.format(start, "MMMM D")} — ${local.format(end, "MMMM D")}`),
  dayHeaderFormat: 'dddd MMMM Do',
}
const DragAndDropCalendar = withDragAndDrop(BigCalendar)

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: events,
      modalIsOpen: false,
      currentEvent: {
        title: 'Title',
        start: new Date(),
        end: new Date(),
        details: 'Details',
      },
    }
  }

  // componentDidMount() {
  //   this.resizeEvent()
  // }

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state
    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }
    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })
    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })
  }

  doubleClickEvent(e) {
    // edit event
    console.log('doubleClickEvent:', e)
  }

  selectSlot = (e) => {
    // console.log('selectSlot:', e)
    // new event
    // const title = window.prompt('New Event name')
    // if (title)
    //   this.setState({
    //     events: [
    //       ...this.state.events,
    //       {
    //         start,
    //         end,
    //         title,
    //       },
    //     ],
    //   })
    this.openModal(e)
  }

  selectEvent = (e) => {
    // console.log('SelectEvent:', e)
    this.openModal(e)
  }

  getEventStyle(event, start, end, isSelected) {
    const style = {}
    if (start.getDay() === new Date().getDay()) {
      style.backgroundColor = 'green'
    }
    if (event.bgcolor) {
      style.backgroundColor = event.bgcolor
    }
    return { style }
  }

  openModal = (event) => {
    // console.log('currentevent:', event)
    this.setState({
       modalIsOpen: true,
       currentEvent: event
     });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleModalEventEdit = (key, newValue) => {
    const newData = {...this.state.currentEvent}
    console.log('newData:', newData)
    newData[key] = newValue
    console.log('newData:', newData)
    this.setState({
      currentEvent: newData
    })
  }

  render() {
    return (
      <>
        <DragAndDropCalendar style={{ height: '100vh' }}
          localizer={localizer}
          formats={formats}
          events={this.state.events}
          defaultView={'week'}
          min={moment('10:00am', 'H:mma').toDate()}
          max={moment('09:59pm', 'H:mma').toDate()}
          step={60}
          showMultiDayTimes={true}
          onEventDrop={this.moveEvent}
          resizable={true}
          onEventResize={this.resizeEvent}
          selectable={true}
          onSelectEvent={this.selectEvent}
          onDoubleClickEvent={this.doubleClickEvent}
          onSelectSlot={this.selectSlot}
          popup={true}
          tooltipAccessor={(e) => e.title}
          eventPropGetter={this.getEventStyle}
          // culture="fi-FI"
        />
        <Modal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} handleModalEventEdit={this.handleModalEventEdit} currentEvent={this.state.currentEvent}/>
      </>
    )
  }
}
