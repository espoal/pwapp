import { React, useState } from '@vendors/react'
import { Sidebar, Header, FilterButton, DatePicker } from '@layouts/dashboard'
import { UserChart } from './userChart/UserChart.mjs'

export const DashboardPage = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            {/*<WelcomeBanner />*/}

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/*<DashboardAvatars />*/}
              <div className='mb-4 sm:mb-0'>
                <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>Dashboard</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker built with flatpickr */}
                <DatePicker align="right" />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add View</span>
                </button>
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              <UserChart />


            </div>

          </div>
        </main>

      </div>

    </div>
  );
}
