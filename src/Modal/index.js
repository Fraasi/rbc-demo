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
    width: '50vw',
    height: '55vh',
    overflow: 'visible'
  }
}

class DateInputButton extends Component {
  render() {
    return (
      <button
        type="button"
        className="date-input-button"
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}

export default class Modal extends Component {
  constructor(props) {
    super(props);
    console.log('constructor:', props)
    const { title, start, end, desc, id } = this.props.currentEvent
    this.state = {
        title: title || '',
        start: start || new Date(),
        end: end || new Date(),
        desc: desc || '',
        id: id || 999,
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleStartDateChange = (newStartDate) => {
    console.log('newStartDate:', newStartDate)
    this.setState({ start: newStartDate })
  }

  handleEndDateChange = (newEndDate) => {
    this.setState({ end: newEndDate })
  }

  handleDescChange = (e) => {
    this.setState({ desc: e.target.value })
  }

  handleDeleteButton = () => {
    this.props.handleEventDelete()
    this.props.closeModal()
  }

  handleSubmitButton = (e) => {
    e.preventDefault()
    console.log('submit:', this.state)
    this.props.handleEventSave(this.state)
    this.props.closeModal()
  }

  render() {
    const { modalIsOpen, closeModal } = this.props
    const { title, start, end, desc, id } = this.state

    return (
      <ReactModal
        isOpen={modalIsOpen}
        style={modalCustomStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        closeTimeoutMS={150}
      >
        <form onSubmit={this.handleSubmitButton} className="form-wrapper">
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
          <div className="modal-buttons">
          {id && <button onClick={this.handleDeleteButton}>Delete event</button>}
          <button onClick={closeModal}>Cancel</button>
    
          <button type="submit">Save</button>
        </div>
        
        </form>
      </ReactModal>
    )
  }
}
