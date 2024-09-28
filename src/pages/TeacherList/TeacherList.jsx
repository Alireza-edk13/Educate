import React from 'react'
import Header from '../../Components/Header/Header'
import PageTitleBanner from '../../Components/PageTitleBanner/PageTitleBanner';
import FooterSection from '../../Components/FooterSection/FooterSection'
import OurTeachersCart from '../../Components/OurTeachersCart/OurTeachersCart';
import Pagination from '../../Components/Pagination/Pagination';
export default function TeacherList() {
    return (
        <>
            <Header />
            <PageTitleBanner title='Teacher List' />

            <div className="container my-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-x-2">
                    <OurTeachersCart img='Card-3.webp' name='Angel Whites' role='Economics' />
                    <OurTeachersCart img='Card-4.webp' name='Sophia Parker' role='Developer' />
                    <OurTeachersCart img='Card-2.webp' name='Mia Thompson' role='Markting' />
                    <OurTeachersCart img='Card-5.webp' name='Angel Whites' role='Ui / Ux' />

                </div>
                <Pagination/>
            </div>
            <FooterSection />

        </>
    )
}
