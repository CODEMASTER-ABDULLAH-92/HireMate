import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './Component/Navbar';

// Auth Pages
import Login from './pages/Login';
import Password from './pages/Password';
import SignUp from './pages/SignUp';
import Otp from './pages/Otp';
import HomeCode365 from './pages/HomeCode365.jsx';

// Home Page
import Home from './pages/Home.jsx';
import NotFound from "../src/pages/404-not-found/page.jsx";

// Algorithm Pages
import Binary from "./pages/Algorithm/binarysearch/page.jsx"; 
import Bubble from "./pages/Algorithm/bubblesort/page.jsx"; 
import Dutch from "./pages/Algorithm/dutch-national-flag-algo/page.jsx"; 
import Insertion from "./pages/Algorithm/insertionsort/page.jsx"; 
import Linear from "./pages/Algorithm/linearSearch/page.jsx"; 
import Selection from "./pages/Algorithm/selectionSort/page.jsx"; 
import AllData from "./pages/all/page.jsx";

// Array DSA Pages
import FiboncacciSeries from "./pages/array-dsa/fibonacci-series-using-array/page.jsx";
import Find2ndLargest from "./pages/array-dsa/find-second-largest/page.jsx";
import MinMaxInArray from "./pages/array-dsa/Min-Max-In-array/page.jsx";
import MissingNumberInArray from "./pages/array-dsa/missing-number-in-an-array/page.jsx";
import ReverseAlternative from "./pages/array-dsa/reverse-alternative-array/page.jsx";
import ReverseAnArray from "./pages/array-dsa/reverseAnArray/page.jsx";
import RotataAnArrayBy1 from "./pages/array-dsa/rotate-an-array-by-1/page.jsx";
import SepEvenOdd from "./pages/array-dsa/seprate-even-odd/page.jsx";
import SortedArraySearch from "./pages/array-dsa/Sorted-array-search/page.jsx";
import SortingOf01 from "./pages/array-dsa/sorting-of-01/page.jsx";
import PrimeNumber from "./pages/primenumber/page.jsx";

// JavaScript Concepts Pages
import ArrayMethods from "../src/pages/array-methods/page.jsx";
import DataTypes from "../src/pages/data-types/page.jsx";
import JsStrings from "../src/pages/Js-strings-methods/page.jsx";
import MasterJs from "../src/pages/masterJavaScript/page.jsx";
import JsLoops from "../src/pages/js-loops/page.jsx";
import MathPage from './pages/MathJS.jsx';
import OtpMethod from "./pages/Otp&Password.jsx";
import DateMethodsPage from '../src/pages/Date.jsx';

// Pattern Pages
import AlphaPyramidPattern from "../src/pages/Patterns/AlphabetPyramidPattern/page.jsx";
import AlphaStairPattern from "../src/pages/Patterns/AlphabetStaircasePattern/page.jsx";
import BinaryNumberTrianglePattern from "../src/pages/Patterns/BinaryNumberTrianglePattern/page.jsx";
import ButterflyPattern from "../src/pages/Patterns/ButterflyPattern/page.jsx";
import DiamondPattern from "../src/pages/Patterns/diamondPattern/page.jsx";
import FloydPattern from "../src/pages/Patterns/floydTriangle/page.jsx";
import HollowSquarePattern from "../src/pages/Patterns/HollowSquarePattern/page.jsx";
import HourGlassPattern from "../src/pages/Patterns/Hourglass-Pattern/page.jsx";
import InvertedPyramidPattern from "../src/pages/Patterns/Inverted-Pyramid-Pattern2/page.jsx";
import InvertedRightAnglePattern from "../src/pages/Patterns/InvertedRight-AngledTrianglePattern/page.jsx";
import MirrorNumberPattern from "../src/pages/Patterns/mirroredNumberPyramidPattern/page.jsx";
import NumberPyramidPattern from "../src/pages/Patterns/number-Pyramid-Pattern/page.jsx";
import PyramidPattern from "../src/pages/Patterns/pyramidPattern/page.jsx";
import RepeatNumberPattern from "../src/pages/Patterns/repeated-Number-Triangle-Pattern/page.jsx";
import ReverseAlphaPattern from "../src/pages/Patterns/reverseAlphabetTrianglePattern/page.jsx";
import RightAnglePattern from "../src/pages/Patterns/right-Angled-Triangle-Pattern/page.jsx";
import SandGlassPattern from "../src/pages/Patterns/sandglassPattern/page.jsx";
import SquarePattern from "../src/pages/Patterns/squarePattern/page.jsx";
import SymmetricAlpha from "../src/pages/Patterns/symmetricAlphabetPyramid/page.jsx";

// Other Pages
import Striver from "../src/pages/striver/page.jsx";
import Stl from "../src/pages/Learn-STL/page.jsx";
import JobsSections from './pages/JobsSections.jsx';

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || 
                     location.pathname === "/password" || 
                     location.pathname === "/signUp" || 
                     location.pathname === "/otp" || 
                     location.pathname === "/hireMate-academy-code365";

  return (
    <div className={hideLayout ? "" : "max-w-[90%] mx-auto"}>
      {/* Conditionally render Navbar based on route */}
      {!hideLayout && <Navbar />}
      
      <Routes>
        {/* Home Routes */}
        <Route path="/hireMate-academy-code365" element={<HomeCode365 />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsSections />} />


        {/* Algorithm Routes */}
        <Route path="/binary" element={<Binary />} />
        <Route path="/bubble" element={<Bubble />} />
        <Route path="/dutch" element={<Dutch />} />
        <Route path="/insertion" element={<Insertion />} />
        <Route path="/linear" element={<Linear />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/all" element={<AllData />} />

        {/* Array DSA Routes */}
        <Route path="/fibonacci-series-using-array" element={<FiboncacciSeries />} />
        <Route path="/find-second-largest" element={<Find2ndLargest />} />
        <Route path="/Min-Max-In-array" element={<MinMaxInArray />} />
        <Route path="/missing-number-in-an-array" element={<MissingNumberInArray />} />
        <Route path="/reverse-alternative-array" element={<ReverseAlternative />} />
        <Route path="/reverseAnArray" element={<ReverseAnArray />} />
        <Route path="/rotate-an-array-by-1" element={<RotataAnArrayBy1 />} />
        <Route path="/seprate-even-odd" element={<SepEvenOdd />} />
        <Route path="/Sorted-array-search" element={<SortedArraySearch />} />
        <Route path="/sorting-of-01" element={<SortingOf01 />} />
        <Route path="/primeNumber" element={<PrimeNumber />} />

        {/* JavaScript Concepts Routes */}
        <Route path="/array-methods" element={<ArrayMethods />} />
        <Route path="/data-types" element={<DataTypes />} />
        <Route path="/Js-strings-methods" element={<JsStrings />} />
        <Route path="/Js-Loops" element={<JsLoops />} />
        <Route path="/masterJavaScript" element={<MasterJs />} />
        <Route path='/mathJs' element={<MathPage/>}/>
        <Route path='/otpPassword' element={<OtpMethod/>}/>
        <Route path='/dateMethod' element={<DateMethodsPage/>}/>

        {/* Pattern Routes */}
        <Route path="/AlphabetPyramidPattern" element={<AlphaPyramidPattern />} />
        <Route path="/AlphabetStaircasePattern" element={<AlphaStairPattern />} />
        <Route path="/BinaryNumberTrianglePattern" element={<BinaryNumberTrianglePattern />} />
        <Route path="/ButterflyPattern" element={<ButterflyPattern />} />
        <Route path="/diamondPattern" element={<DiamondPattern />} />
        <Route path="/floydTriangle" element={<FloydPattern />} />
        <Route path="/HollowSquarePattern" element={<HollowSquarePattern />} />
        <Route path="/Hourglass-Pattern" element={<HourGlassPattern />} />
        <Route path="/Inverted-Pyramid-Pattern2" element={<InvertedPyramidPattern />} />
        <Route path="/InvertedRight-AngledTrianglePattern" element={<InvertedRightAnglePattern />} />
        <Route path="/mirroredNumberPyramidPattern" element={<MirrorNumberPattern />} />
        <Route path="/number-Pyramid-Pattern" element={<NumberPyramidPattern />} />
        <Route path="/pyramidPattern" element={<PyramidPattern />} />
        <Route path="/repeated-Number-Triangle-Pattern" element={<RepeatNumberPattern />} />
        <Route path="/reverseAlphabetTrianglePattern" element={<ReverseAlphaPattern />} />
        <Route path="/right-Angled-Triangle-Pattern" element={<RightAnglePattern />} />
        <Route path="/sandglassPattern" element={<SandGlassPattern />} />
        <Route path="/squarePattern" element={<SquarePattern />} />
        <Route path="/symmetricAlphabetPyramid" element={<SymmetricAlpha />} />

        {/* Other Routes */}
        <Route path="/striver" element={<Striver />} />
        <Route path="/Learn-STL" element={<Stl />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/otp" element={<Otp />} />

        {/* Recruiter Auth Routes */}
        <Route path="/recuiter-login" element={<Login />} />
        <Route path="/recuiter-password" element={<Password />} />
        <Route path="/recuiter-signUp" element={<SignUp />} />
        <Route path="/recuiter-otp" element={<Otp />} />









        {/* 404 Route - Should be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;