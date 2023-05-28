import React from 'react'
import {Box} from '@chakra-ui/react'
import {Job} from 'types'
import {JobItem} from 'components'

interface JobsListProps {
	list: Job[]
}

export const JobsList = ({list}: JobsListProps) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			gap="10px"
			my="20px"
		>
			{list.map(job => (
				<JobItem key={job.id} {...job}/>
			))}
		</Box>
	)
}

