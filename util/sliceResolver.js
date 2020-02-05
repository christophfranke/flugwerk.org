import Slices from '@/slices'

const slicesMap = {
  video: Slices.VideoPlayer,
  textblock: Slices.TextBlock,
  feedback_text: Slices.FeedbackText,
  feedback_audio: Slices.FeedbackAudio
}

export default slice => slicesMap[slice.slice_type]