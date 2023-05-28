import React from 'react'
import styles from './JobItem.module.sass'
import {Job} from 'types'
import {Box, Button, Heading} from '@chakra-ui/react'
import {useAppDispatch} from 'hooks'
import {setFilterName} from 'store/slices/jobSlice'

interface JobItemProps extends Job {
}

const colors = ['#171923', '#DD6B20', '#322659', '#2F855A', '#702459', '#9F7AEA', '#744210', '#F6AD55', '#C53030', '#B794F4', '#00B5D8']

export const JobItem = ({
							id,
							company,
							featured,
							new: isNew,
							level,
							languages,
							location,
							position,
							role,
							tools,
							postedAt,
							contract
						}: JobItemProps) => {

	const skills = [role, level, ...languages, ...tools]
	const dispatch = useAppDispatch()

	return (
		<Box
			className={styles.row}
			border="1px"
			borderColor="gray.200"
			p="3"
			rounded="md"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			borderLeft={isNew && featured ? "4px solid #38B2AC" : ""}
		>
			<Box
				display="flex"
				alignItems="center"
				columnGap="20px"
			>
				<Box
					background={colors[id]}
					display="flex"
					justifyContent="center"
					alignItems="center"
					w="80px"
					h="80px"
					rounded="full"
					color="white"
					textAlign="center"
					p="5"
					fontSize="sm"
				>
					{company}
				</Box>

				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
				>
					<Box
						display="flex"
						flexWrap="wrap"
						gap="15px"
						alignItems="center"
					>
						<Heading fontSize="md">
							{company}
						</Heading>
						{isNew && (
							<Box
								background={"teal.400"}
								color="white"
								rounded="xl"
								p={"3px 6px"}
							>
								NEW!
							</Box>
						)}

						{featured && (
							<Box
								background={"teal.900"}
								color="white"
								rounded="xl"
								p={"3px 6px"}
							>
								FEATURED
							</Box>
						)}
					</Box>

					<Heading fontSize="16px" my="5px">
						{position}
					</Heading>

					<Box
						display="flex"
						flexWrap="wrap"
						alignItems="center"
						gap="10px"
					>
						<Box>
							{postedAt}
						</Box>
						<Box>
							{contract}
						</Box>
						<Box>
							{location}
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				className={styles.jobItem}
				display="flex"
				alignItems="center"
				justifyContent="center"
				flexWrap="wrap"
				gap="10px"
			>
				{
					skills.map((skill, idx) => (
						<Button
							key={idx}
							fontSize="14px"
							px={3}
							onClick={() => dispatch(setFilterName(skill))}
						>
							{skill}
						</Button>
					))
				}
			</Box>
		</Box>
	)
}

