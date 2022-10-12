import React,{useEffect,useRef,useState} from 'react'
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
function AddMovie() {
    const {auth} = useAuth();
    console.log(auth)
    const role=Math.max(...auth.roles)
    const titleRef= useRef();
    const [title,setTitle]=useState('');
    const [bgimage,setBGimage]=useState('');
    const [year,setYear]=useState(2000)
    const [errMsg,setErrMsg]=useState('')
    const [genre,setGenre]=useState('')
    const [language,setLanguage]=useState('')
    const [poster,setPoster]=useState('')
    const [plot,setPlot]=useState('')
    const [success,setSuccess]=useState(false)
    const errRef=useRef();
    useEffect( () => {
        titleRef.current.focus();
        setErrMsg('')
    }, [])
    const handleSubmit= async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("/movies",
                JSON.stringify({title,year,genres:genre,role,plot,username:auth.user,language:language,poster,bgPoster:bgimage}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setSuccess(true);
            setErrMsg("added to movies")
            setTitle('')
            setYear('')
            setGenre('')
            setLanguage('')
            setPoster('')
            setPlot('')
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response)

            //clear state and controlled inputs
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('please fill all fields');
            } else if (err.response?.status ===403){
                setErrMsg('already movie exists ')
            }else{
                setErrMsg("failed")
            }
            errRef.current.focus();
            setSuccess(true);
            setErrMsg("added to movies")
            setTitle('')
            setYear('')
            setGenre('')
            setLanguage('')
            setPoster('')
            setPlot('')

        }
    }
  return (
<div className='addMovie'>
    <section style={{marginTop:"100px"}}>
        
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    {}
    <h1>add movie</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">
            title:
        </label>
        <input
            type="text"
            id="title"
            ref={titleRef}
            autoComplete="off"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
        />
        <label htmlFor="year">
            year:
        </label>
        <input
            type="number"
            id="year"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            required
        />

        <label htmlFor="bgimage">
            bgimage:
        </label>
        <input
            type="text"
            id="bgimage"
            onChange={(e) => setBGimage(e.target.value)}
            value={bgimage}
            required
        />

        <label htmlFor="genre">
            genre:
        </label>
        <input
            type="text"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            required
        />
        <label htmlFor="genre">
            language:
        </label>
         <input
            type="text"
            id="genre"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            required
        />
        <label htmlFor="genre">
            poster:
        </label>
         <input
            type="text"
            id="genre"
            onChange={(e) => setPoster(e.target.value)}
            value={poster}
            required
        />
        <label for="plot" >Plot</label>
        <textarea name="body"
                cols={80}
                rows={4}
                onChange={(e) =>setPlot(e.target.value)}
                value={plot}
        />

        <button>Add movie</button>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    </form>
</section>
</div>
  )
}

export default AddMovie