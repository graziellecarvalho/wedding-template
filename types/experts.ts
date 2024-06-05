export interface ExpertsProps {
  _id: string
  name: string
  city: string
  state: string
  profileImage: string
  socials?: { title: string, url: string }[]
}