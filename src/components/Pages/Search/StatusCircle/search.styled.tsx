import styled from 'styled-components'
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone'
import FlightIcon from '@mui/icons-material/Flight'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import MoodIcon from '@mui/icons-material/Mood'
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns'

export const Circle = styled.div<{ statusBars: string }>`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid #fab013;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.statusBars ? '#120c56' : '#fff')};
`

export const StyledAddLocationIcon = styled(FollowTheSignsIcon)<{
    color?: string
}>`
    color: ${(props) => (props.color ? '#fff' : '')};
`

export const StyledFileDownloadDoneIcon = styled(FileDownloadDoneIcon)<{
    color?: string
}>`
    color: ${(props) => (props.color ? '#fff' : '')};
`
export const StyledFlightIcon = styled(FlightIcon)<{
    color?: string
}>`
    color: ${(props) => (props.color ? '#fff' : '')};
`
export const StyledDirectionsBusIcon = styled(DirectionsBusIcon)<{
    color?: string
}>`
    color: ${(props) => (props.color ? '#fff' : '')};
`
export const StyledMoodIcon = styled(MoodIcon)<{
    color?: string
}>`
    color: ${(props) => (props.color ? '#fff' : '')};
`
