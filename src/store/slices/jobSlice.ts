import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Job} from 'types'

export interface JobSlice {
	jobs: Job[],
	filterNames: string[],
	jobsList: Job[],
}

const initialState: JobSlice = {
	jobs: [],
	filterNames: [],
	jobsList: []
}

const jobSlice = createSlice({
	name: 'job',
	initialState,
	reducers: {
		setJobs(state, action: PayloadAction<Job[]>) {
			state.jobs = action.payload
		},
		setFilterName(state, action: PayloadAction<string>) {
			if (state.filterNames.includes(action.payload)) return

			state.filterNames = [...state.filterNames, action.payload]
		},
		setJobsList(state) {
			state.jobsList = state.jobs.filter(job => {
				const skills = [job.role, job.level, ...job.languages, ...job.tools]

				return state.filterNames.every(value => skills.includes(value))
			})
		},
		removeFilter(state, action:PayloadAction<string>) {
			state.filterNames = state.filterNames.filter(filter => filter !== action.payload)
		}
	},
})

export const {
	setJobs,
	setFilterName,
	setJobsList,
	removeFilter
} = jobSlice.actions
export default jobSlice.reducer