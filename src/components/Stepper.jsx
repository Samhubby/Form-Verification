const Stepper = () => {
  const steps = [
    { label: "Business Type", isCompleted: true, isActive: false },
    { label: "Business Details", isCompleted: false, isActive: true },
    { label: "Authorized Representative", isCompleted: false, isActive: false },
    { label: "Business Owners", isCompleted: false, isActive: false },
    { label: "Company Directors", isCompleted: false, isActive: false },
    { label: "Support Information", isCompleted: false, isActive: false },
    { label: "Add Details", isCompleted: false, isActive: false },
    { label: "Complete Registration", isCompleted: false, isActive: false },
  ];

  return (
    <div className="flex w-[1120px] justify-between mx-auto font-inter text-[#636567] text-sm">
      {steps.map((value, index) => {
        return (
          <div className="flex flex-col space-y-2  items-center relative  ">
            {value.isCompleted ? (
              <div>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75 0C3.886 0 0.75 3.136 0.75 7C0.75 10.864 3.886 14 7.75 14C11.614 14 14.75 10.864 14.75 7C14.75 3.136 11.614 0 7.75 0ZM5.853 10.003L3.34 7.49C3.27519 7.42519 3.22378 7.34825 3.18871 7.26358C3.15364 7.17891 3.13559 7.08815 3.13559 6.9965C3.13559 6.90485 3.15364 6.81409 3.18871 6.72942C3.22378 6.64474 3.27519 6.56781 3.34 6.503C3.40481 6.43819 3.48174 6.38679 3.56642 6.35171C3.65109 6.31664 3.74185 6.29859 3.8335 6.29859C3.92515 6.29859 4.01591 6.31664 4.10058 6.35171C4.18526 6.38679 4.26219 6.43819 4.327 6.503L6.35 8.519L11.166 3.703C11.2969 3.57212 11.4744 3.49859 11.6595 3.49859C11.8446 3.49859 12.0221 3.57212 12.153 3.703C12.2839 3.83388 12.3574 4.0114 12.3574 4.1965C12.3574 4.3816 12.2839 4.55912 12.153 4.69L6.84 10.003C6.77524 10.0679 6.69832 10.1194 6.61364 10.1545C6.52896 10.1896 6.43818 10.2077 6.3465 10.2077C6.25482 10.2077 6.16404 10.1896 6.07936 10.1545C5.99468 10.1194 5.91776 10.0679 5.853 10.003Z"
                    fill="#34C759"
                  />
                </svg>
              </div>
            ) : (
              <span
                className={`${
                  value.isActive ? "border-[#34C759]" : "border-[#D7DADC]"
                } border-[3px] rounded-full w-3 z-10 h-3`}
              ></span>
            )}
            {index !== 7 ? (
              <div
                className={`${
                  value.isCompleted ? "bg-[#34C759]" : "bg-[#D7DADC]"
                } w-[142px] z-0 h-1 absolute bottom-[53px] left-[34px] `}
              ></div>
            ) : null}
            <span className="w-[59px] h-[40px] text-center">{value.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
