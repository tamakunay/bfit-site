import { SelectedPage } from '@/shared/types'
import Text from '@/components/ui/Text'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type BenefitProps = {
  icon: JSX.Element
  description: string
  title: string
  setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({ icon, title, description, setSelectedPage }: BenefitProps) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full bg-primary-100 border-2 p-4'>{icon}</div>
      </div>
      <Text as="h4" className='font-bold'>{title}</Text>
      <Text as="p" className='my-3'>{description}</Text>
      <AnchorLink
        href={SelectedPage.Benefits}
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      >
        <p>Learm More</p>
      </AnchorLink>
    </div>
  )
}

export default Benefit