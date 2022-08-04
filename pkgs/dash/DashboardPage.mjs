import { React, useState, useEffect } from '@vendors/react'
import { DashboardPresentational } from './DashboardPresentational.mjs'

export const DashboardPage = () => {

  const [data, setData] = useState()

  useEffect(() => {

    async function fetchData() {
      const result = await fetch(
        '/data/UserChart.json',
      )
      const fetchedData = await result.json()

      setData(fetchedData)
    }

    fetchData()

  }, [])


  return (
    <DashboardPresentational {...{data}}/>
  )
}
