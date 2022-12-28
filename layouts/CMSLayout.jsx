import ThemeSwitch from '@/components/ThemeSwitch'
const CMSLayout = (page) => {
  return (
    <>
      <ThemeSwitch />
      {page}
    </>
  )
}

export default CMSLayout
