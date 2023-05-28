import React, {ReactNode} from 'react'
import {Box} from '@chakra-ui/react'
import {Header} from 'layout'

interface Layout {
	children: ReactNode
}

export const Layout = ({children}: Layout) => {
	return (
		<Box>
			<Header/>

			<Box as="main">
				{children}
			</Box>
		</Box>
	)
}

