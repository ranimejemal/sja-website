import React from 'react';
import Navigation from '@/components/Navigation';

const SJLabs: React.FC = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <div className="min-h-screen flex items-center justify-center py-16 px-6">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          <Navigation />

          {/* Left Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              DESIGN WITH A.INTELLIGENCE
            </h1>

            <div className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg mb-8">
              Ai x Architecture Mastery: Online Course
            </div>

            <p className="text-3xl font-bold mb-6">110,00 €</p>

            <p className="mb-2 text-lg"><strong>Duration:</strong> 4 hours</p>

            <p className="mb-6 text-lg">
              <strong>Objective:</strong> To equip architects and designers with the practical skills to integrate generative AI into their creative workflow, covering concept design, prompt engineering, 3D modeling, rendering, animation, and urban analysis{' '}
              <strong>using tools like MidJourney, MNML.AI, Krea.AI, Kling.AI, and Aino.World.</strong>
            </p>

            <a
              href="https://pay.hotmart.com/M100896699H?sck=HOTMART_PRODUCT_PAGE&off=2b6robu2&hotfeature=32&_gl=1*1dpr2gu*_gcl_au*MzM3MTUzNjczLjE3NTI2NzI2NzkuMTgzMDg5Mzk3NC4xNzUyODUyMjQwLjE3NTI4NTMxNjA.*_ga*MTU5MjcwMjgyMC4xNzUyNjcyNjc5*_ga_GQH2V1F11Q*czE3NTI4NDQ0NTIkbzE3JGcxJHQxNzUyODUzMzc0JGo2MCRsMCRoMA..&bid=1752854046349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white  text-black px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-300 transition"
            >
              Buy Now !
            </a>
          </div>

          {/* Right Section with Image */}
          <div className="relative p-6 md:p-10 rounded-[2.5rem] shadow-lg overflow-hidden">
            <img
              src="/assets/patot.png"
              alt="AI Course Visual"
              className="rounded-[2.5rem] w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="bg-white text-black py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Description */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4">DESCRIPTION OF THE COURSE</h2>

            <div className="inline-block bg-black text-white font-semibold text-lg px-6 py-3 rounded-full mb-6">
              Ai x Architecture Mastery: Online Course
            </div>

            <p className="text-lg mb-4 leading-relaxed">
              In this 4-hour hands-on online course, participants will dive into the creative potential of artificial intelligence in architecture, concept art, and digital storytelling. Designed for architects, designers, and digital artists, this course explores the use of MidJourney, MNML.ai, Kling AI, Krea, and Aino to transform the design workflow, from idea generation and pre-concepts to rendering, animation, modeling, and urban analysis.
            </p>

            <p className="text-lg mb-8 leading-relaxed">
              Each participant will gain practical skills in AI prompting, visualization, and storytelling, while crafting a unique architectural or design narrative supported by advanced AI tools.
            </p>

            <h3 className="text-5xl font-bold mb-4">Overview</h3>
            <p className="text-lg leading-relaxed mb-4">
              This immersive course gives participants access to professional AI tools reshaping the creative industry. You will:
            </p>

            <ul className="list-disc list-outside ml-4 text-lg leading-relaxed mb-6">
              <li><strong>Generate visual concepts</strong> using <strong>MidJourney</strong> and <strong>MNML.ai</strong></li>
              <li>Convert AI imagery into 3D forms with <strong>Krea.ai</strong></li>
              <li>Add animations with <strong>Kling AI</strong></li>
              <li>Perform urban site analysis using <strong>Aino World</strong></li>
              <li>Render designs into photorealistic visualizations</li>
              <li>Explore AI storytelling for branding, films, and architecture</li>
            </ul>

            <hr className="border-t border-black my-6 w-2/3" />

            <h3 className="text-4xl font-bold mb-2">Outcomes</h3>
            <p className="text-lg leading-relaxed mb-4">By the end, participants will complete:</p>
            <ul className="list-disc list-outside ml-4 text-lg leading-relaxed">
              <li>Three MidJourney brainstorming visuals for skyscrapers or homes</li>
              <li>Conceptual renders for a 3D model using MNML.ai and MidJourney</li>
              <li>A short animation from AI-generated frames</li>
              <li>A real-time sketch visualized using Krea.ai</li>
              <li>One full site analysis using Aino.ai</li>
            </ul>

            <hr className="border-t border-black my-6 w-2/3" />

            <h3 className="text-4xl font-bold mb-2">Required Tools</h3>
            <ul className="list-disc list-outside ml-4 text-lg leading-relaxed">
              <li>MidJourney</li>
              <li>MNML.ai</li>
              <li>Krea.ai</li>
              <li>Kling AI</li>
              <li>Aino World</li>
              <li>ChatGPT</li>
              <li>Sketchup or any modeling tool</li>
            </ul>
          </div>

          {/* Right: Image + Instructor Bio */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="rounded-[2.5rem] overflow-hidden w-full mb-6">
              <img
                src="/assets/8d1025cf-fb9f-4373-8143-ad88d8362604.png"
                alt="Instructor"
                className="w-full h-auto object-cover rounded-[2.5rem]"
              />
            </div>

            <div className="text-left w-full">
              <h3 className="text-4xl font-bold mb-3">About your instructor:</h3>
              <h4 className="font-bold text-xl">Syrine Jemal</h4>
              <p className="font-bold mb-1">
                AI Artist, Architect & Prompt Engineer | AI Design Award Winner - 3rd Prize (2024)
              </p>
              <p className="text-lg mb-4">
                Founder of <strong>AI Architects Magazine</strong> and <strong>Syrine Jemal Architecture Ltd</strong>
              </p>

              <p className="text-lg mb-2">
Syrine is the founder of <strong>AI Architects Magazine</strong>, a global platform for exploring the future of design through AI, and <strong>Syrine Jemal Architecture Ltd</strong>, a studio focused on high-end, innovative projects. She has professional experience in <strong>Tunisia, France, Switzerland, and the United States</strong>, with a practice that spans luxury residential design, futuristic architecture, and immersive AI visualization.              </p>

              <p className="text-lg">
                As an instructor, Syrine teaches AI tools like <strong>MidJourney, Kling, MNML, ComfyUI, and Krea</strong>,
                and guides professionals through cutting-edge workflows combining storytelling, design thinking, and AI.
                
              </p>
              <br></br>
              <p className="text-lg mb-2">
              As an instructor, Syrine teaches AI tools like <strong>MidJourney, Kling, MNML, ComfyUI, and Krea</strong>,
              and guides professionals through cutting-edge workflows  that combine storytelling, design thinking, and visual AI. She leads sessions for <strong>AI Architects Academy </strong> and <strong>Kaslik Workshop</strong>, empowering creatives to master prompt writing, pre-concept generation, and the full AI-powered design process.
            </p>

            </div>
          </div>
        </div>

        {/* Program Breakdown Section */}
        <div className="flex flex-col lg:flex-row gap-100 max-w-7xl mx-auto  ">
          {/* Left Column: Program Breakdown */}
          <div  >

            <hr className="border-t border-black my-6 w-2/3" />

            <h2 className="text-4xl font-bold mb-6">Program Breakdown</h2>
            <br></br>

            <div className="space-y-6 text-lg">
              <div>
                <h3 className="font-bold text-xl">Part 1: Introduction (10 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Overview of AI in architecture and design</li>
                  <li>Presentation of course structure</li>
                  <li>Why and how leading firms use AI today</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 2: MidJourney – Brainstorming (30 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Interface demo</li>
                  <li>Writing structured prompts</li>
                  <li>Activity: 3 AI-generated skyscraper concepts</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 3: MidJourney – Pre-Concepts (10 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Live generation of cabin or house ideas</li>
                  <li>Activity: 3 conceptual AI images</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 4: MNML AI – Concept Ideation (30 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Using MNML for abstract and stylized ideas</li>
                  <li>Introducing MNML AI platform and tools</li>
                  <li>Activity: Generate conceptual visuals</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 5: Rendering with MidJourney (30 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>How to use the “Retexture” feature</li>
                  <li>Activity: Render your 3D model’s exterior + interior</li>
                  
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 6: Rendering with MNML AI (25 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Rendering with Mnml Ai</li>
                  <li>Styling outputs for storytelling</li>
                  
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 7: Krea AI – Modeling & Sketch to Render (7 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Turning sketches or images into 3D in Krea</li>
                  <li>Real time sketch to render</li>
                  <li>Activity: Visualize your hand sketch into a photoreal render</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 8: Kling AI – AI Animation (15 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Create videos animations to our rendered images with Ai sound</li>
                  <li>Activity: Make 2 exterior and 1 interior animated video</li>
                  
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Part 9: AINO – Urban & Site Analysis (23 min)</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Introducing Aino’s Platform</li>
                  <li>Making an urban Analysis for a location: types of buildings, roads, population etc…</li>
                  <li>Activity: Analyze a location with Ai</li>
                </ul>
              </div>
              <br></br>
              
              <a
              href="https://pay.hotmart.com/M100896699H?sck=HOTMART_PRODUCT_PAGE&off=2b6robu2&hotfeature=32&_gl=1*1dpr2gu*_gcl_au*MzM3MTUzNjczLjE3NTI2NzI2NzkuMTgzMDg5Mzk3NC4xNzUyODUyMjQwLjE3NTI4NTMxNjA.*_ga*MTU5MjcwMjgyMC4xNzUyNjcyNjc5*_ga_GQH2V1F11Q*czE3NTI4NDQ0NTIkbzE3JGcxJHQxNzUyODUzMzc0JGo2MCRsMCRoMA..&bid=1752854046349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-300 transition"
            >
              Buy Now !
            </a>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="w-full md:w-2/3 flex-col ">
            
            <br></br>
            <br></br>
            <h2 className="text-4xl font-bold mb-6">What you will achieve in this course?</h2>

            <div className="space-y-4">
              <img
                src="/assets/tower2.png"
                alt="AI Building Example"
                className="rounded shadow-lg object-cover"
              />
              <img
                src="/assets/001.png"
                alt="Concept Example"
                className="rounded shadow-lg object-cover"
              />
              <video
    src="/assets/Professional_Mode_the_girl_is_walking_inside_the_r (1).mp4"
    controls
    className="rounded shadow-lg w-full object-cover"
  />
  <video
    src="/assets/Soft_breeze_rustles_palm_leaves_.mp4"
    controls
    className="rounded shadow-lg w-full object-cover"
  />
  
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SJLabs;
