import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import FooterSection from '../../Components/FooterSection/FooterSection'
import CourseBox from '../../Components/CourseBox/CourseBox';
import SortSection from '../../Components/SortSection/SortSection';
import Pagination from '../../Components/Pagination/Pagination';
import PageTitleBanner from '../../Components/PageTitleBanner/PageTitleBanner';
import { useGetCourses } from '../../hooks/useCourse';

export default function CoursesList() {

    const { data: courses, isSuccess, isError, error, isLoading } = useGetCourses()

    return (
        <>
            <Header />
            <PageTitleBanner title='Course List' />
            <section className=' py-16'>
                <div className="container">
                    <SortSection />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-8">
                        {
                            courses?.map(course => (
                                <CourseBox {...course} key={course._id} />
                            ))
                        }
                    </div>
                </div>
                <Pagination />
            </section>

            <FooterSection />
        </>
    )
}
