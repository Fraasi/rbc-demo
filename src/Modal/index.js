import React, { Component } from 'react'
import * as ReactModal from 'react-modal'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './index.css'


ReactModal.setAppElement('#root')
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    height: '70vh'
  }
};

export default class Modal extends Component {

  componentDidMount() {
    console.log('componentDidMount')

  }

  componentWillUnmount() {
    console.log('componentWillUnmount:')
  }

  handleTitleChange = (newTitle) => {
    this.props.handleModalEventEdit('title', newTitle.target.value)
  }

  handleStartDateChange = (newStartDate) => {
    // console.log('newStartDate:', newStartDate)
    this.props.handleModalEventEdit('start', newStartDate)
  }

  handleEndDateChange = (newEndDate) => {
    this.props.handleModalEventEdit('end', newEndDate)
  }

  handleDescChange = (newDescription) => {
    this.props.handleModalEventEdit('desc', newDescription.target.value)
  }

  handleEditSave = () => {
    this.props.handleEventSave()
    this.props.closeModal()
  }

  handleEditDelete = () => {
    this.props.handleEventDelete()
    this.props.closeModal()
  }

  render() {
    const { modalIsOpen, closeModal } = this.props
    const { title, start, end, desc, id } = this.props.currentEvent

    return (
      <ReactModal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        closeTimeoutMS={150}
      >
        <label htmlFor="id-num">Event id: ({id})</label>
        <input type="text" value={title} onChange={this.handleTitleChange} placeholder="Title" required/>
        <br />
        <br />
        <label htmlFor="start-time">Event start </label>
        <DatePicker
          selected={start}
          onChange={this.handleStartDateChange}
          required={true}
          showTimeSelect={true}
          showMonthDropdown={true}
          showWeekNumbers={true}
          shouldCloseOnSelect={false}
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy H:mm"
          timeCaption="time"
        />
        <br />
        <br />
        <label htmlFor="end-time">Event end &nbsp;</label>
        <DatePicker
          selected={end}
          onChange={this.handleEndDateChange}
          required={true}
          showTimeSelect={true}
          showMonthDropdown={true}
          showWeekNumbers={true}
          shouldCloseOnSelect={false}
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy H:mm"
          timeCaption="time"
        />

        <br />

        <p>
          <textarea onChange={this.handleDescChange} value={desc} placeholder="description" />
        </p>


        <button onClick={this.handleEditSave}>save</button>
        { id && <button onClick={this.handleEditDelete}>delete event</button> }
        <button onClick={closeModal}>cancel</button>
        
      </ReactModal>
    )
  }
}
