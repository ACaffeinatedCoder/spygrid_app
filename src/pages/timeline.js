import './timelineCSS.css'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

function TimelinePage() {
  return (
    <div className='timeline-overall'>
      <header className='timeline-header'>
        <CalendarMonthOutlinedIcon fontSize='large'/>
          <h2 style={{paddingLeft: '12px', paddingRight: '12px'}}>
            Timeline
          </h2>
          <CalendarMonthOutlinedIcon fontSize='large'/>
      </header>
      <div className='timeline-subheader1'>
        <p>
          Do you remember that one time? No? I sure do.
        </p>
      </div>
      <div className='timeline-body'>
        <input type='date'/>
      </div>
      <div className='timeline-newEntry'>
        <h3>New Entry</h3>
        <p>A new notable event just occured? Better keep track of it, my Moon.</p>
        <input type='date'/>
      </div>
    </div>
  );
}

export default TimelinePage;
