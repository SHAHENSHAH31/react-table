
import { useState } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  
  // Sample JSON data representing the table rows
  const [rowData, setRowData] = useState( [
    {
      "rank": "#1",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "BE/B-Tech",
        "year": "-1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },
    {
      "rank": "#2",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "B-Tech Computer Science Engineering",
        "year": "1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },
    {
      "rank": "#3",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "BE/B-Tech",
        "year": "-1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },
    {
      "rank": "#4",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "B-Tech Computer Science Engineering",
        "year": "1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },{
      "rank": "#5",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "BE/B-Tech",
        "year": "-1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },
    {
      "rank": "#6",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "B-Tech Computer Science Engineering",
        "year": "1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },{
      "rank": "#7",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "BE/B-Tech",
        "year": "-1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },
    {
      "rank": "#8",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "B-Tech Computer Science Engineering",
        "year": "1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },{
      "rank": "#9",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "BE/B-Tech",
        "year": "-1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },
    {
      "rank": "#10",
      "college": {
        "Institute": "IIT Madras - India Institute of Technology - [IIMT], Chennai",
        "address": "Chennai Tamil Nadu | AICTE Approved",
        "course": "B-Tech Computer Science Engineering",
        "exam": "JEE-Advance 2023 Cutoff:144",
      },
      "courseFee": {
        "rupees": "₹12,000",
        "course": "B-Tech Computer Science Engineering",
        "year": "1st Year Fees",
      },
      "placement": {
        "averagePackage": "₹10,00,00",
        "highestPackage": "₹25,00,00",
      },
      "userReviews": "8.6/10",
      "ranking": "# 3rd/<span style={{ color: 'red' }}>131</span> in India"
    },
    
  ]);
  const [hasMore,setHasMore]=useState(true)

  const fetchMoreData=()=>{
   // Simulating data fetching delay
   setTimeout(() => {
    // Simulated additional data to append
    const additionalData = [
      {
        "rank": "#11",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#12",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#13",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#14",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#15",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#16",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#17",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#18",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#19",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#20",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#21",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },{
        "rank": "#22",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#23",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#24",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#25",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#26",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#27",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#28",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#29",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
      {
        "rank": "#30",
        "college": {
          "Institute": "IIT Bombay - Indian Institute of Technology, Bombay",
          "address": "Mumbai Maharashtra | AICTE Approved",
          "course": "B-Tech Electrical Engineering",
          "exam": "JEE-Advance 2023 Cutoff:155",
        },
        "courseFee": {
          "rupees": "₹11,000",
          "course": "BE/B-Tech",
          "year": "-1st Year Fees",
        },
        "placement": {
          "averagePackage": "₹11,00,00",
          "highestPackage": "₹26,00,00",
        },
        "userReviews": "8.6/10",
        "ranking": "# 11th/<span class='red-text'>131</span> in India"
      },
     

      
      // Add more simulated additional data as needed...
    ];

    // Append the additional data to the existing rowData
    setRowData(prevData => [...prevData, ...additionalData]);

    // Here, you would typically fetch data from your API and then append it to the existing rowData state.
    // Once you have fetched all available data, you can set hasMore to false to stop the infinite scrolling.
    // In this example, I'm setting hasMore to false after a few iterations to simulate reaching the end of the data.
    if (rowData.length >= 30) {
      setHasMore(false);
    }
  }, 1000); // Simulated delay
  }

  return (
    <>
    <InfiniteScroll dataLength={rowData.length} next={fetchMoreData} hasMore={hasMore}>
    <table>
        {/* Table header */}
        <thead>
          <tr>
            <th># Rank</th>
            <th>Colleges</th>
            <th>Course Fee</th>
            <th>Placement</th>
            <th>User Reviews</th>
            <th>Ranking</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index}>
              {/* Table cells */}
              <td className="rank">{row.rank}</td>
              <td>
                {/* College information */}
                <div>
                  <div>
                    <h5>{row.college.Institute}</h5>
                    <p>{row.college.address}</p>
                  </div>
                  <div className='space'>
                    <p>{row.college.course}</p>
                    <p>{row.college.exam}</p>
                  </div>
                  <div>
                    {/* Buttons and checkbox */}
                    <button className='apply'>Apply Now</button>
                    <button className='download'>Download Brochure</button>
                    <input type="checkbox" id={`checkbox-${index}`} />
                    <label htmlFor={`checkbox-${index}`}>Add To Compare</label>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <h5>{row.courseFee.rupees}</h5>
                  <p>{row.courseFee.course}</p>
                  <p>{row.courseFee.year}</p>
                  <span>Compare Fees</span>
                </div>
              </td>
              <td>
                <div>
                  <h5> {row.placement.averagePackage}</h5>
                  <p>Average Package</p>
                  <h5>{row.placement.highestPackage}</h5>
                  <p>Highest Package:</p> 
                  <span>Compare Placement</span>
                </div>
              </td>
              <td> <span className="dot" style={{ color: 'rgb(209, 105, 26)' }}>•</span>{row.userReviews}</td>
              <td dangerouslySetInnerHTML={{ __html: row.ranking }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfiniteScroll>
      
    </>
  );

}

export default App;
