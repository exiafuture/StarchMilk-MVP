import React from 'react';

const NavBar = () => {
  return (
    <nav className="
      bg-red-400 text-white p-4 fixed w-full z-10
      bottom-0 md:bottom-auto md:top-0 
      md:rounded-lg 
      md:shadow-[6px_6px_10px_rgba(112,128,144,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-10">
        <div className="text-lg font-bold hidden md:block">MyApp</div>
        <div className="">
          <svg 
            className="h-6 w-6"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M811.988 439.378L822.923 518.363L763.502 774.665L395.945 783.174L310.303 406.18L482.078 411.653L515.086 374.404L668.967 299.368L766.666 340.514L811.988 439.378Z" fill="#FFD700" stroke="white" stroke-width="30"/>
            <path d="M701.063 542.202L707.536 511.068L730.186 450.722L718.082 359.429L675.04 373.499L512.583 383.078L553.119 489.333L495.075 544.635L480.959 497.637L419.78 504.678L399.734 429.493L331.497 413.034L312.773 351.372L259.438 357.51L265.612 420.616L221.489 504.705L215.798 608.683L265.994 651.529L274.667 740.178L251.624 812.725L254.858 845.78L412.951 856.456L442.658 868.232L606.148 771.926L619.435 729.371L675.42 653.034L671.892 616.973L709.442 627.846L701.063 542.202Z" fill="#0ED990" stroke="white" stroke-width="30"/>
            <path d="M376.585 387.372L280.746 468.167L202.83 537.847L191.092 640.055L249.055 744.13L329.318 654.008L710.057 498.578L746.949 409.248L696.639 383.491L754.579 342.813L737.347 260.944L582.665 245.329L368.053 316.72L376.585 387.372Z" fill="#D30202" stroke="white" stroke-width="30"/>
          </svg>
        </div>
        <ul className="flex md:space-x-4 w-full justify-center md:justify-start md:w-auto md:ml-8">
          <li className="flex-grow md:flex-grow-0">
            <a href="#" className="hover:underline block text-center">Home</a>
          </li>
          <li className="flex-grow md:flex-grow-0">
            <a href="#" className="hover:underline block text-center">About</a>
          </li>
          <li className="flex-grow md:flex-grow-0">
            <a href="#" className="hover:underline block text-center">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
