import React from 'react'
import Header from '../../Components/Header/Header'
import PageTitleBanner from '../../Components/PageTitleBanner/PageTitleBanner';
import FooterSection from '../../Components/FooterSection/FooterSection'
import Blog from '../../Components/Blog/Blog';
export default function BlogDetail() {
  return (
    <>
      <Header />
      <PageTitleBanner title='Blog Detail' />
      <div className="container my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=' space-y-6'>
            <div className=' flex flex-wrap items-center justify-between bg-mainWhite mainBoxShadow p-6 gap-4 rounded-2xl'>
              <div className="flex gap-2">
                <img className=' w-[30%] rounded-full' src="/images/u-11.webp" alt="author" />
                <div>
                  <p className=' mb-1 text-mainGray'>Author:</p>
                  <h6>Michal Clark</h6>
                </div>
              </div>
              <div>
                <p className=' mb-1 text-mainGray'>Published Date</p>
                <h6>8 September 2023</h6>
              </div>
              <div>
                <p className=' mb-1 text-mainGray'>Category</p>
                <h6>Online Learning</h6>
              </div>

            </div>
            <div className=' text-mainGray flex flex-wrap gap-4'>
              <span>#education</span><span>#learning</span><span>#latest</span><span>#teachers</span>
            </div>
            <h2 className='text-3xl  xl:text-5xl leading-[125%] xl:leading-[125%] tracking-[-.47px]'>
              Remote Learning Tips: Thrive in Online Classes
            </h2>
            <p className=' text-mainGray leading-[150%]'>
              Lorem ipsum dolor sit amet consectetur. Egestas sem purus nulla libero tortor nunc mattis vestibulum enim. Faucibus neque sagittis amet lectus nec magna sollicitudin cras ante. Dignissim urna urna eget ipsum lorem mattis quis dictum. At nunc turpis ullamcorper ac massa eu. Id ornare fames nisl maecenas nibh at ipsum. Amet in mauris consectetur placerat nullam non risus vel sit. Proin lacinia purus et morbi penatibus vestibulum pretium. Lorem ultricies dictumst aliquet pellentesque neque sed. Tempor mi et ac consequat placerat massa phasellus diam tellus. Eget egestas lorem eget elit aliquam lectus in eleifend. Rhoncus faucibus adipiscing turpis risus dictum habitasse.
            </p>
          </div>
          <div>
            <img src="/images/blog/bd.webp" alt="blog" className=' rounded-xl' />
          </div>
        </div>
        <p className=' text-mainGray mt-8 leading-[150%]'>
          Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus diam ipsum integer vitae morbi hendrerit viverra. Mauris sed cursus in turpis vel fringilla pretium odio. Felis suspendisse orci potenti quis etiam netus. Eu et blandit posuere senectus sed pulvinar. Phasellus senectus pharetra ornare sed adipiscing dui magna. Velit pretium eu quis nisl mauris convallis sociis. Neque cras eu feugiat aliquet nullam non egestas urna. Massa enim lacus sed lorem urna adipiscing. Vitae sed condimentum ridiculus feugiat consectetur natoque. Neque cras nisi nec semper. Eget leo orci nisl erat amet arcu.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-12">
          <div className=' font-CourgetteR text-4xl leading-[125%]'>
            Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus diam ipsum integer vitae morbi hendrerit viverra. Mauris sed cursus in turpis vel fringilla pretium odio.
          </div>

          <div className=' text-mainGray space-y-4 child:leading-[150%] '>
            <p>Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus diam ipsum integer vitae morbi hendrerit viverra. Mauris sed cursus in turpis vel fringilla pretium odio. Felis suspendisse orci potenti quis etiam netus. Eu et blandit posuere senectus sed pulvinar. Phasellus senectus pharetra ornare sed adipiscing dui magna. Velit pretium eu quis nisl mauris convallis sociis. Neque cras eu feugiat aliquet nullam non egestas urna. Massa enim lacus sed lorem urna adipiscing. Vitae sed condimentum ridiculus feugiat consectetur natoque. Neque cras nisi nec semper. Eget leo orci nisl erat amet arcu.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis. Eget ut felis urna natoque. Sed lacus diam ipsum integer vitae morbi hendrerit viverra. Mauris sed cursus in turpis vel fringilla pretium odio. Felis suspendisse orci potenti quis etiam netus. Eu et blandit posuere senectus sed pulvinar. Phasellus senectus pharetra ornare sed adipiscing dui magna. Velit pretium eu quis nisl mauris convallis sociis. Neque cras eu feugiat aliquet nullam non egestas urna. Massa enim lacus sed lorem urna adipiscing. Vitae sed condimentum ridiculus feugiat consectetur natoque. Neque cras nisi nec semper. Eget leo orci nisl erat amet arcu.
            </p>
          </div>

        </div>
      </div>
      <Blog />
      <FooterSection />
    </>
  )
}
