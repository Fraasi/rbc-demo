import React, { Component } from 'react'
import * as ReactModal from 'react-modal'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './index.css'

ReactModal.setAppElement('#root')
const modalCustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '55vh',
    overflow: 'visible'
  }
}

class DateInputButton extends React.Component {
  render() {
    return (
      <button
        className="date-input-button"
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}

export default class Modal extends Component {

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
        style={modalCustomStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        closeTimeoutMS={150}
      >
        <div className="form-wrapper">
          <div>
            <label htmlFor="id-num">Event id: ({id})</label>
            <input type="text" value={title} onChange={this.handleTitleChange} placeholder="Title" required />
          </div>
          <br />
          <div>
            <label htmlFor="start-time">Event start </label>
            <DatePicker
              customInput={<DateInputButton />}
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
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: '-40px, 0px'
                }
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="end-time">Event end &nbsp;</label>
            <DatePicker
              customInput={<DateInputButton />}
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
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: '-40px, 0px'
                }
              }}
            />
          </div>
            <br />
          <div>
            <textarea onChange={this.handleDescChange} value={desc} placeholder="description" />
          </div>
        </div>

        <div className="modal-buttons">
          {id && <button onClick={this.handleEditDelete}>delete event</button>}
          <button onClick={closeModal}>cancel</button>
          <button onClick={this.handleEditSave}>save</button>
        </div>
      </ReactModal>
    )
  }
}
