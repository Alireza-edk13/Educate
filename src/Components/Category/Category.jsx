import React from 'react'
import Button from '../Button/Button';

import TopSection from '../TopSection/TopSection';
import CategoryCart from '../CategoryCart/CategoryCart';

export default function Category() {
    return (
        <>
            <div className=" container my-14">
                <TopSection maxWidthNum='40rem' title='Course Categories' descMark='Everyone' href='/course-list' desc='Begin Your Learning, Something For' />
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
                    <CategoryCart title='Cooking & Culinary' star='5' teachers='10' time='60' img='c2-1.webp' />
                    <CategoryCart title='Economic & Finances' star='5' teachers='10' time='60' img='c2-2.webp' />
                    <CategoryCart title='Creative Arts' star='5' teachers='10' time='60' img='c2-3.webp' />
                    <CategoryCart title='Graphic Design' star='5' teachers='10' time='60' img='c2-4.webp' />
                    <CategoryCart title='Artificial Intelligence' star='5' teachers='10' time='60' img='c2-5.webp' />
                    <CategoryCart title='Computer Sciences' star='5' teachers='10' time='60' img='c2-6.webp' />
                </div>
                <Button styleBtn='w-full text-center mt-6 lg:hidden' text='View All' href={'/course-list'} />

            </div>
        </>
    )
}
0