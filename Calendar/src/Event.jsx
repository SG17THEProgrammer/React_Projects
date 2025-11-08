const Event = ({ calendarEvent }) => {
  return (
    <div style={{textAlign:"center" , width:"100%" , padding:"10px" , backgroundColor:"lightBlue" , cursor:"pointer"}}>
      {calendarEvent?.title}
    </div>
  )
}

export default Event
