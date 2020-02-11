import Slices from '@/slices'

const slicesMap = {
  video: Slices.VideoPlayer,
  textblock: Slices.TextBlock,
  feedback_text: Slices.FeedbackText,
  feedback_audio: Slices.FeedbackAudio,
  calendar: Slices.Calendar,
  team: Slices.Team,
  image: Slices.FullImage
}

export default slice => slicesMap[slice.slice_type]