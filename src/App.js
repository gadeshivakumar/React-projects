import React,{useState} from 'react';

import './App.css';

function App() {
  function reset() {
    setData(["", "", "", "", "", "", "", "", ""])
    setLock(false)
    setTr(false)
    setCount(0);
    setMark1s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark2s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark3s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark4s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark5s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark6s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark7s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark8s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })

    setMark9s({
      backgroundColor:'rgb(66, 65, 65)',
      color:'yellowgreen'
    })
  }
  // const [winset,SetWinset]=useState([])
  const [mark1s,setMark1s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark2s,setMark2s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark3s,setMark3s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark4s,setMark4s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark5s,setMark5s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark6s,setMark6s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark7s,setMark7s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark8s,setMark8s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })

  const [mark9s,setMark9s]=useState({
    backgroundColor:'rgb(66, 65, 65)',
    color:'yellowgreen'
  })


  const [symbol,setSymbol]=useState('')
  const [count, setCount] = useState(0);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [tr,setTr]=useState(false);
  let   [lock,setLock]=useState(false)
  const toggle = (num) => {
    if(lock)
    {
      return 0;
    }
    if (data[num] === "") {
      
      const newData = [...data];
      newData[num] = count % 2 === 0 ? 'X' : 'O';
     
      setData(newData);
      
      setCount(count + 1);
      
      win(newData);
    }

    
  }

  function win(data) {
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    {
      check(data)
      setSymbol(data[0])
      setTr(true)
      setMark1s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark2s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark3s({
        backgroundColor:'gold',
        color:'black'
      })
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
    {
      check(data)
      setSymbol(data[3])
      setTr(true)
      setMark4s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark5s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark6s({
        backgroundColor:'gold',
        color:'black'
      })
      
    }

    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
    {
      check(data)
      setSymbol(data[6])
      setTr(true)
      setMark7s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark8s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark9s({
        backgroundColor:'gold',
        color:'black'
      })
     
    }

    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
    {
      check(data)
      setSymbol(data[0])
      setTr(true)
      setMark1s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark4s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark7s({
        backgroundColor:'gold',
        color:'black'
      })
    }

    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
    {
      check(data)
      setSymbol(data[1])
      setTr(true)
      setMark2s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark5s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark8s({
        backgroundColor:'gold',
        color:'black'
      })
    }

    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
    {
      check(data)
      setSymbol(data[2])
      setTr(true)
      setMark3s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark6s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark9s({
        backgroundColor:'gold',
        color:'black'
      })
    }

    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
    {
      check(data)
      setSymbol(data[0])
      setTr(true)
      setMark1s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark5s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark9s({
        backgroundColor:'gold',
        color:'black'
      })
    }

    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
    {
      check(data)
      setSymbol(data[2])
      setTr(true)
      setMark3s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark5s({
        backgroundColor:'gold',
        color:'black'
      })
      setMark7s({
        backgroundColor:'gold',
        color:'black'
      })
    }
  }

  function check(data) {
    setLock(true)
  }
  return (
   
<>

<div className="display">{tr && (<p>Congratulations {symbol} Have won</p>)}{(!tr&& count>8) &&(<p>It's a tie</p>)}</div>


<div className="board">

        <div className="tic1">
          <div className="mark0" style={mark1s}onClick={() => toggle(0)}>{data[0]}</div>
          <div className="mark1" style={mark2s}onClick={() => toggle(1)}>{data[1]}</div>
          <div className="mark2" style={mark3s}onClick={() => toggle(2)}>{data[2]}</div>
        </div>
        <div className="tic2">
          <div className="mark3" style={mark4s}onClick={() => toggle(3)}>{data[3]}</div>
          <div className="mark4" style={mark5s}onClick={() => toggle(4)}>{data[4]}</div>
          <div className="mark5" style={mark6s}onClick={() => toggle(5)}>{data[5]}</div>
        </div>
        <div className="tic3">
          <div className="mark6" style={mark7s}onClick={() => toggle(6)}>{data[6]}</div>
          <div className="mark7"style={mark8s} onClick={() => toggle(7)}>{data[7]}</div>
          <div className="mark8" style={mark9s}onClick={() => toggle(8)}>{data[8]}</div>
        </div>
      </div>
      
      
      <button className='sym' onClick={reset}>reset</button>
    </>
  );
}

export default App;
