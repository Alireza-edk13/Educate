import React, { useState, useEffect } from 'react'
import TopSection from '../TopSection/TopSection'
import CourseBox from '../CourseBox/CourseBox'
import Button from '../Button/Button';
import { useGetCourses } from '../../hooks/useCourse';



export default function PopularCourses() {

    const { data: courses } = useGetCourses()
    console.log(courses);

    return (
        <>
            <div className=" bg-CoursesBg bg-no-repeat bg-cover bg-center mb-16">
                <div className=" container py-16">
                    <TopSection maxWidthNum='36rem' title='Popular Courses' descMark='Experts' href='/course-list' desc='Courses Presented To You By' />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-8">
                        {
                            courses?.slice(0, 6).map(course => (
                                <CourseBox {...course} key={course._id} />
                            ))
                        }
                    </div>
                    <Button styleBtn='w-full text-center mt-6 lg:hidden' text='View All' href={'/course-list'} />
                </div>
            </div>
        </>
    )
}
