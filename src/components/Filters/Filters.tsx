import React from 'react'
import {Box, Button} from '@chakra-ui/react'
import {CloseIcon} from '@chakra-ui/icons'
import {useAppDispatch} from 'hooks/redux-hooks'
import {removeFilter} from 'store/slices/jobSlice'

interface FiltersProps {
	badges: string[]
}

export const Filters = ({badges}: FiltersProps) => {
	const dispatch = useAppDispatch()

	return (
		<Box
			display="flex"
			gap="20px"
			mt="20px"
		>
			{
				badges.map((badge, idx) => {
					return (
						<Box
							key={idx}
							display="flex"
						>
							<Button
								borderRightRadius="none"
								mb={2}
							>
								{badge}
							</Button>
							<Button
								colorScheme="blue"
								borderLeftRadius="none"
								onClick={() => dispatch(removeFilter(badge))}
							>
								<CloseIcon/>
							</Button>
						</Box>
					)
				})
			}
		</Box>
	)
}

