import { comment } from 'postcss';
import OurTeachers from './src/Components/OurTeachers/OurTeachers';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        vvsm: '340px',
        vsm: '380px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        InterR: ["Inter-Regular", "sans-serif"],
        InterM: ["Inter-Medium", "sans-serif"],
        InterSB: ["Inter-SemiBold", "sans-serif"],
        InterB: ["Inter-Bold", "sans-serif"],
        CourgetteR: ["Courgette-Regular", "sans-serif"],
      },
      fontSize: {
        md: "15px"
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '7rem',
        }
      },

      boxShadow: {
        // "custom": "0 0 40px 5px rgb(0 0 0/5%)",
        // "blog": "0 0 40px 5px rgb(0 0 0/7%)"
      },
      colors: {
        main: "#0aa6d7",
        mainGray: "#7a8582",
        mainBlack: "#2a322d",
        mainRgba: 'rgba(10, 166, 215, 0.2)',
        mainWhite: '#fefcfb',
        ourTeachersBgColorRgba: 'rgba(10, 166, 215, 0.1)',
        commentsRgba: 'rgba(10, 166, 215, 0.3)',
        blogRgba: 'rgba(254, 252, 251, 0.5)',
        lightGray: '#b7bdbb',
        mainBgColor : '#f4f5f5'
      },
      backgroundImage: {
        landing: "url(/images/banner-bg.webp)",
        CoursesBg: "url(/images/courses/bg-courses.webp)",
        OurTeachersBg1: "url(/images/ourTeachers/paint-shape.webp)",
        OurTeachersBg2: "url(/images/ourTeachers/team-slider-bg.webp)",
        OurTeachersBg2: "url(/images/ourTeachers/team-slider-bg.webp)",
        DiscountBg1: "url(/images/discount/coming-soon-banner.webp)",
        DiscountBg2: "url(/images/discount/exclude.webp)",
        BlogCartBg: "url(/images/blog/blog_card_list_bg.webp)",
        BlogBg: "url(/images/blog/banner-bg-2.webp)",
        FooterBg: "url(/images/footer/footer-bg.webp)",
        LoginBg: "url(/images/login/login.webp)",
        HeaderBg: "url(/images/page-title-bg_2.webp)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }
  ],
}

