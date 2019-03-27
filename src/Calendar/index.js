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
      isNewEvent: false,
      modalEvent: {
        title: null,
        start: null,
        end: null,
        desc: null,
        id: null
      },
    }
  }

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

  selectSlot = (event) => {
    this.setState({ isNewEvent: true })
    // Need to set new Date objects,
    // otherwise changing one changes both.
    event.start = new Date(event.start)
    event.start.setHours(10)
    event.end = new Date(event.end)
    event.end.setHours(22)
    this.openModal(event)
  }

  selectEvent = (event) => {
    this.setState({ isNewEvent: false })
    this.openModal(event)
  }

  openModal = (event) => {
    const id = event.id ? event.id : Date.now()
    this.setState({
      modalIsOpen: true,
      modalEvent: {
        ...event,
        id
      }
    });
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

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleModalEventEdit = (key, newValue) => {
    const newData = { ...this.state.modalEvent }
    newData[key] = newValue
    this.setState({
      modalEvent: newData
    })
  }

  handleEventSave = (newEvent) => {
    console.log('handleEventSave:', newEvent)
    const index = this.state.events.findIndex( event => event.id === newEvent.id )
    const { title, start, end, desc, id } = newEvent
    if (index > -1) {
      const newEvents = this.state.events
      newEvents[index] = {
        title,
        start,
        end,
        desc,
        id,
      }
      this.setState({
        events: newEvents
      })
    } else {
      this.setState({
        events: [
          ...this.state.events,
          {
            title,
            start,
            end,
            desc,
            id
          },
        ],
      })
    }
  }

  handleEventDelete = () => {
    const index = this.state.events.findIndex(event => {
      return event.id === this.state.modalEvent.id
    })
    if (index > -1) {
      const newEvents = this.state.events
      newEvents.splice(index, 1)
      this.setState({
        events: newEvents
      })
    }
  }

  render() {
    return (
      <>
        <DragAndDropCalendar style={{ height: '100vh' }}
          localizer={localizer}
          formats={formats}
          events={this.state.events}
          defaultView={'month'}
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
        />
        <Modal 
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          handleModalEventEdit={this.handleModalEventEdit}
          modalEvent={this.state.modalEvent}
          handleEventSave={this.handleEventSave}
          handleEventDelete={this.handleEventDelete}
          isNewEvent={this.state.isNewEvent}
          key={this.state.modalEvent.id}
        />
      </>
    )
  }
}
