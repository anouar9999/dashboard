import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  
  StatisticsWidget5,
  TablesWidget10,
  TablesWidget5,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
        

        <div className='col-xl-6'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='cheque'
            color='danger'
            iconColor='white'
            title='+3000'
            titleColor='white'
            description='New Customers'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-6'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='briefcase'
            color='warning'
            iconColor='white'
            title='$50,000'
            titleColor='white'
            description='Milestone Reached'
            descriptionColor='white'
          />
        </div>

       
      </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      {/* begin::Col */}
      {/* <div className='col-xl-4'>
        <ListsWidget1 className='card-xl-stretch mb-xl-8' />
      </div> */}
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xl-6'>
        <TablesWidget5 className='card-xl-stretch mb-5 mb-xl-8' />
      </div>
      <div className='col-xl-6'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-12' />
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}
   
      

     
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
