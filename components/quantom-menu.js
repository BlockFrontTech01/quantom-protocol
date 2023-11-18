import { useCallback, useEffect } from "react";

const QuantomMenu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div
      className="bg-lavenderblush w-[241px] h-[1150px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full overflow-auto [&.animate]:md:animate-[1s_ease-in-out_0s_1_normal_forwards_slide-in-right] md:opacity-[0]"
      data-animate-on-scroll
    >
      <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[119px] left-[50px] rounded-xl w-[133px] h-[22px] overflow-hidden">
        <b className="absolute top-[0px] left-[19px] text-mini font-inika text-white text-center">
          Buy Quantom
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[183px] left-[50px] rounded-xl w-[133px] h-[22px] overflow-hidden">
        <b className="absolute top-[0px] left-[25px] text-mini font-inika text-white text-center">
          Community
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-black absolute top-[247px] left-[54px] rounded-xl w-[133px] h-[22px] overflow-hidden"
        onClick={onFrameButton2Click}
      >
        <b className="absolute top-[0px] left-[31px] text-mini font-inika text-white text-center">
          Developer
        </b>
      </button>
      <img
        className="absolute top-[17px] left-[199px] w-[30px] h-[21px] overflow-hidden object-cover cursor-pointer"
        alt=""
        src="/frame-371@2x.png"
        onClick={onClose}
      />
    </div>
  );
};

export default QuantomMenu;
