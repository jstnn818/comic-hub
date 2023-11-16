import { useState, useEffect } from 'react'
import { useSeriesContext } from '../hooks/useSeriesContext'

//components
import SeriesDetails from '../components/SeriesDetails'
import SeriesForm from '../components/SeriesForm'

const Home = () => {
    const { series, dispatch } = useSeriesContext()
    const [ editMode, setEditMode ] = useState(false)
  
    useEffect(() => {
        const fetchSeries = async () => {
            const response = await fetch('http://localhost:4000/api/series')
            const json = await response.json()
    
            if (response.ok) {
                dispatch({type: 'SET_SERIES', payload: json})
            }
        }
        fetchSeries()
    }, [dispatch])

    const switchEditMode = () => {
      setEditMode(!editMode)
    }

    return (
        <div className="home">
          <div className="series">
            {series && series.map(singleSeries => (
              <SeriesDetails singleSeries={singleSeries} key={singleSeries._id} editMode={editMode}/>
            ))}
          </div>
            <div className="side-column">
            <div className="edit-button" onClick={switchEditMode}> 
              <strong> {!editMode ? 'Edit' : 'Done'} </strong> 
              <span className="material-symbols-outlined"> {!editMode ? 'edit' : 'done'} </span>
            </div>
            {!editMode ? '' : (<SeriesForm />)}
          </div>
        </div>
    )
}

export default Home