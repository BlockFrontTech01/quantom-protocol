import { useEffect } from "react";
import HeaderSection from "../components/header-section";

const QuantomProtocol = () => {
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
  return (
    <div className="relative [background:linear-gradient(rgba(243,_179,_195,_0.2),_rgba(243,_179,_195,_0.2)),_#fff] w-full h-[5174px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-lg text-black font-hanuman md:h-[8450px]">
      <div className="my-0 mx-[!important] absolute top-[2561px] left-[0px] w-[1071px] flex flex-row items-start justify-end gap-[529px] z-[0] text-11xl font-goblin-one lg:w-[860px] md:flex-col md:gap-[750px] md:pl-[46px] md:box-border">
        <div className="relative w-2.5 h-7 overflow-hidden shrink-0" />
        <div className="relative inline-block w-[528px] h-[76px] shrink-0 md:text-6xl md:text-center md:w-[300px]">
          <span>{`Quantomflow `}</span>
          <span className="text-red">Roadmap</span>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4002px] left-[0px] w-[988px] flex flex-row items-start justify-end gap-[529px] z-[1] text-11xl font-goblin-one lg:w-[800px] md:flex-col md:pl-[70px] md:pt-[2300px] md:box-border sm:pl-[50px] sm:box-border">
        <div className="relative w-2.5 h-7 overflow-hidden shrink-0" />
        <div className="relative inline-block w-[448px] h-[76px] shrink-0 md:text-xl">
          <span>{`Why `}</span>
          <span className="text-red">Quantomflow?</span>
          <span>{` `}</span>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[137px] left-[0px] w-[969px] flex flex-row items-start justify-end gap-[516px] z-[2] text-center text-white lg:gap-[0px] lg:pr-[200px] lg:box-border md:pr-[560px] md:box-border">
        <div className="flex flex-row items-center justify-start z-[0]">
          <div className="relative w-5 h-[31px] overflow-hidden shrink-0" />
        </div>
        <img
          className="relative w-[392px] h-[275px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0] z-[1]"
          alt=""
          src="/frame-319@2x.png"
          data-animate-on-scroll
        />
        <div className="my-0 mx-[!important] absolute top-[963px] left-[0px] flex flex-row items-center justify-start gap-[529px] z-[2] lg:gap-[370px] lg:pr-[200px] lg:box-border md:flex-col md:gap-[0px] md:pl-5 md:box-border sm:pl-[13px] sm:box-border">
          <div className="relative w-[25px] h-8 overflow-hidden shrink-0" />
          <div
            className="relative rounded-3xs w-[392px] h-[275px] overflow-hidden shrink-0 bg-[url('/frame-321@3x.png')] bg-cover bg-no-repeat bg-[top] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-top] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[36px] left-[6px] inline-block w-[379px] h-[203px]">
              At the core of QuantumWallet lies the QuantumFlow Protocol, a
              cutting-edge account abstraction concept that transcends the
              limitations of conventional blockchain architectures. This
              protocol redefines the entire ecosystem, offering a secure,
              scalable, and quantum-resistant foundation for digital
              transactions.
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4207px] left-[8px] w-[1504px] flex flex-row items-start justify-center gap-[122px] z-[3] text-center lg:w-[1200px] md:flex-col md:pl-5 md:pt-[2800px] md:pr-0 md:box-border">
        <div className="relative w-[373px] h-[617px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-lavenderblush shadow-[0px_1px_30px_2px_rgba(0,_0,_0,_0.1)] w-[373px] h-[275px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[35px] left-[13px] inline-block w-[348px] h-[205px]">
              <p className="m-0">
                <b>Future-Proof Technology</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0 font-light">
                QuantumFlow is designed to evolve with technological
                advancements, ensuring that QuantumWallet remains at the
                forefront of innovation in the digital transaction landscape.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[342px] left-[0px] rounded-xl bg-lavenderblush shadow-[0px_1px_30px_2px_rgba(0,_0,_0,_0.1)] w-[373px] h-[275px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[35px] left-[13px] inline-block w-[348px] h-[205px]">
              <p className="m-0">
                <b>Community-Driven Development</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0 font-light">
                QuantumWallet is not just a platform; it's a community. Join us
                in shaping the future of decentralized transactions,
                contributing to an ecosystem that values collaboration,
                innovation, and inclusivity.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative rounded-xl bg-lavenderblush shadow-[0px_1px_30px_2px_rgba(0,_0,_0,_0.1)] w-[373px] h-[275px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[35px] left-[13px] inline-block w-[348px] h-[205px]">
            <p className="m-0">
              <b>User-Centric Design</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0 font-light">
              QuantumWallet prioritizes user experience, making decentralized
              transactions accessible to everyone. The intuitive interface and
              simplified processes empower users to navigate the quantum realm
              effortlessly.
            </p>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[255px] left-[0px] w-[1071px] flex flex-row items-start justify-end gap-[529px] z-[4] text-11xl font-goblin-one lg:pr-[190px] lg:box-border md:pr-[475px] md:box-border">
        <div className="relative w-2.5 h-7 overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[548px] h-[38px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0] md:text-xl"
          data-animate-on-scroll
        >
          <span>{`Quantomflow `}</span>
          <span className="text-red">Protocol</span>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[455px] left-[0px] flex flex-row items-start justify-end gap-[478px] z-[5] text-center lg:gap-[290px] lg:pr-0 lg:box-border md:flex-col md:gap-[0px] md:pl-[30px] md:box-border">
        <div className="relative w-11 h-[19px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[500px] h-[229px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-mini md:w-[370px]"
          data-animate-on-scroll
        >
          Introducing a groundbreaking paradigm shift in the world of digital
          transactions by harnessing the power of quantum computing through the
          innovative QuantumFlow Protocol. Unlike traditional blockchain
          systems, QuantumFlow seamlessly integrates account abstraction,
          revolutionizing the way users interact with decentralized networks.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[727px] left-[0px] flex flex-row items-center justify-start gap-[529px] z-[6] lg:gap-[340px] lg:pr-[200px] lg:box-border md:flex-col md:gap-[0px] md:pl-[15px] md:pr-0 md:box-border">
        <div className="relative w-[31px] h-[34px] overflow-hidden shrink-0 z-[0]" />
        <img
          className="relative w-[392px] h-[275px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-top] opacity-[0] z-[1]"
          alt=""
          src="/frame-318@2x.png"
          data-animate-on-scroll
        />
        <div className="my-0 mx-[!important] absolute top-[712px] left-[0px] w-[930px] flex flex-row items-start justify-start gap-[529px] z-[2] lg:gap-[370px] md:flex-col md:gap-[50px]">
          <div className="relative w-[9px] h-7 overflow-hidden shrink-0" />
          <img
            className="relative w-[392px] h-[275px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            alt=""
            src="/frame-322@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1794px] left-[4px] w-[1504px] flex flex-row items-start justify-center gap-[122px] z-[7] text-center lg:w-[1200px] md:flex-col md:gap-[72px] md:pl-5 md:pt-[100px] md:box-border">
        <div className="relative w-[373px] h-[622px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-lavenderblush shadow-[0px_1px_30px_2px_rgba(0,_0,_0,_0.1)] w-[373px] h-[275px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[7px] left-[13px] inline-block w-[348px] h-[203px]">
              <p className="m-0">
                <b>Quantum-Resistant Security</b>
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0 font-light">
                QuantumFlow employs state-of-the-art cryptographic techniques,
                ensuring that transactions remain secure even in the face of
                quantum threats. Our protocol is designed to withstand the
                computational power of quantum computers, providing users with a
                future-proof platform.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[347px] left-[0px] rounded-xl bg-lavenderblush shadow-[0px_1px_30px_2px_rgba(0,_0,_0,_0.1)] w-[373px] h-[275px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[7px] left-[13px] inline-block w-[348px] h-[260px]">
              <p className="m-0">
                <b>Scalability and Speed</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0 font-light">
                QuantumFlow enhances transaction throughput, allowing for rapid
                and efficient processing. As the demand for decentralized
                applications grows, QuantumWallet ensures that users experience
                swift and scalable transactions, maintaining a seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[373px] h-[621px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-lavenderblush shadow-[0px_1px_30px_2px_rgba(0,_0,_0,_0.1)] w-[373px] h-[275px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[7px] left-[13px] inline-block w-[348px] h-[260px]">
              <p className="m-0">
                <b>Seamless Abstraction</b>
              </p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0 font-light">
                QuantumWallet introduces a user-friendly abstraction layer,
                simplifying the complexity of blockchain interactions. Users can
                engage with the decentralized network without the need for
                intricate technical knowledge, making QuantumWallet accessible
                to a broad audience.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[347px] left-[0px] rounded-xl bg-lavenderblush shadow-[0px_1px_30px_2px_rgba(0,_0,_0,_0.1)] w-[373px] h-[275px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[7px] left-[13px] inline-block w-[348px] h-[260px]">
              <p className="m-0">
                <b>Interoperability</b>
              </p>
              <p className="m-0 font-light">&nbsp;</p>
              <p className="m-0 font-light">
                QuantumWallet is designed with interoperability in mind,
                enabling users to interact with various blockchain networks
                effortlessly. Whether it's cross-chain transactions or
                integration with existing systems, QuantumWallet fosters an
                environment of seamless collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2704px] left-[4px] w-[1504px] flex flex-row items-start justify-center gap-[40px] z-[8] text-inherit lg:w-[1200px] md:flex-col md:pl-10 md:pt-[800px] md:box-border sm:pl-[50px] sm:box-border">
        <div
          className="relative w-[289px] h-60 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-60">
            <p className="m-0">
              <b>
                <span>{`Phase 1: Quantum `}</span>
                <span className="text-red">Genesis</span>
              </b>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>Project Inception.</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>
                  <span className="font-light">
                    {" "}
                    Lay the groundwork for QuantumWallet, assemble a talented
                    team of developers, and define the project's core
                    objectives.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-60 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-60">
            <p className="m-0">
              <b>Research and Development.</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li>
                <span className="font-light">
                  Conduct an in-depth analysis of quantum-resistant technologies
                  and formulate the QuantumFlow Protocol for secure and scalable
                  transactions.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-60 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-60">
            <p className="m-0">
              <b>Prototype Developmen</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li>
                <span className="font-light">
                  Create an initial QuantumWallet prototype to demonstrate the
                  feasibility and potential of the QuantumFlow Protocol.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3011px] left-[4px] w-[1504px] flex flex-row items-start justify-center gap-[40px] z-[9] text-inherit lg:w-[1200px] lg:pr-0 lg:box-border md:flex-col md:gap-[39px] md:pl-10 md:pt-[1320px] md:box-border">
        <div
          className="relative w-[289px] h-[234px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[234px]">
            <p className="m-0">
              <b>
                <span>{`Phase 2: Quantum `}</span>
                <span className="text-red">Fusion</span>
              </b>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>Community Engagement</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>
                  <span className="font-light">
                    Launch the QuantumWallet community platform to gather
                    feedback, suggestions, and foster collaboration with early
                    adopters.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-[234px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[234px]">
            <p className="m-0">
              <b>Community Engagement</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span className="font-light">
                  Launch the QuantumWallet community platform to gather
                  feedback, suggestions, and foster collaboration with early
                  adopters.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-[234px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[234px]">
            <p className="m-0">
              <b>Security Audits</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li>
                <span className="font-light">
                  Conduct thorough security audits to ensure the robustness of
                  QuantumFlow, addressing potential vulnerabilities and
                  strengthening the protocol.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3312px] left-[8px] w-[1504px] flex flex-row items-start justify-center gap-[40px] z-[10] text-inherit lg:w-[1200px] md:flex-col md:pl-10 md:pt-[1860px] md:box-border">
        <div
          className="relative w-[289px] h-[234px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[234px]">
            <p className="m-0">
              <b>
                <span>{`Phase 3: Quantum `}</span>
                <span className="text-red">Acceleration</span>
              </b>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>Mainnet Launch</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>
                  <span className="font-light">
                    Release the QuantumWallet Mainnet, marking the official
                    launch of the QuantumFlow Protocol for public use.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-[234px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[234px]">
            <p className="m-0">
              <b>Partnerships and Integrations</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li>
                <span className="font-light">
                  Forge strategic partnerships with blockchain projects,
                  businesses, and platforms to enhance QuantumWallet's
                  interoperability and utility.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-[234px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[234px]">
            <p className="m-0">
              <b>User Onboarding</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li>
                <span className="font-light">
                  Focus on user education and onboarding, making QuantumWallet
                  accessible to a broader audience.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3613px] left-[8px] w-[1500px] flex flex-row items-start justify-center gap-[40px] z-[11] text-inherit lg:w-[1200px] md:flex-col md:gap-[39px] md:pl-10 md:pt-[2350px] md:box-border">
        <div
          className="relative w-[289px] h-[260px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[260px]">
            <p className="m-0">
              <b>
                <span>{`Phase 4: Quantum `}</span>
                <span className="text-red">Evolution</span>
              </b>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>Decentralized App (DApp) Ecosystem:</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>
                  <span className="font-light">
                    Encourage and support the development of decentralized
                    applications on the QuantumWallet platform, expanding the
                    ecosystem.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-[260px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[260px]">
            <p className="m-0">
              <b>Governance Implementation</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span className="font-light">
                  Introduce decentralized governance mechanisms to empower the
                  community in shaping the future of QuantumWallet.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="relative w-[289px] h-[260px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[0px] left-[0px] inline-block w-[289px] h-[260px]">
            <p className="m-0">
              <b>Continuous Improvement</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <ul className="m-0 pl-6">
              <li>
                <span className="font-light">
                  Implement updates and improvements based on community
                  feedback, technological advancements, and emerging industry
                  standards.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4891px] left-[6px] w-[929px] flex flex-row items-center justify-end gap-[421px] z-[12] text-center text-6xl lg:w-[800px] md:w-[350px] md:flex-col md:pl-[65px] md:pt-[2800px] md:box-border">
        <div className="relative w-[89px] h-[39px] overflow-hidden shrink-0" />
        <b className="relative inline-block w-[350px] shrink-0">
          Your Quantum Experience Starts Here.
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[5032px] left-[6px] flex flex-row items-start justify-start gap-[50px] z-[13] md:gap-[20px] md:pt-[3310px] md:box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[5114px] left-[8px] flex flex-row items-center justify-start gap-[7px] z-[14] text-center text-[14px] font-inika lg:pb-0 lg:box-border md:pt-[3300px] md:box-border">
        <img
          className="relative rounded-[40px] w-5 h-5 object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
      </div>
      <HeaderSection />
    </div>
  );
};

export default QuantomProtocol;
