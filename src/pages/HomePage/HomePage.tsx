import React, {useEffect} from 'react'
import styles from 'index.sass'
import {Container} from '@chakra-ui/react'
import {Layout} from 'layout'
import {Filters, JobsList} from 'components'
import {data} from '../../mock/data'
import {useAppDispatch, useAppSelector} from 'hooks'
import {setJobs, setJobsList} from 'store/slices/jobSlice'
import {Job} from 'types'

export const HomePage = () => {
	const dispatch = useAppDispatch()
	const {jobs, jobsList, filterNames} = useAppSelector(state => state.jobs)

	useEffect(() => {
		dispatch(setJobs(data as Job[]))
	}, [])

	useEffect(() => {
		dispatch(setJobsList())
	}, [jobs, filterNames])

	return (
		<Layout>
			<Container maxWidth="4xl">
				<Filters badges={filterNames}/>
				<JobsList list={jobsList}/>
			</Container>
		</Layout>
	)
}

