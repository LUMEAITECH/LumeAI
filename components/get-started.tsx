import React from 'react'
import { CopyButton } from '@/components/ui/copy-button'

function GetStarted() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8 pt-48 lg:pt-32'>
    <div className='max-w-4xl w-full space-y-12'>
      {/* Enhanced Header */}
      <div className='space-y-6 bg-black/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm'>
        <h1 className='text-5xl font-bold text-center mb-8 text-shadow bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent'>
          Quick Start Guide for Building Realistic <span className='text-green-400'>Lume Agents</span>
        </h1>
        
        <p className='text-xl text-white text-shadow leading-relaxed'>
          Below you&apos;ll find the recommended steps to get up and running with {' '}
          <a href="https://github.com/LumeAIAgent/Lume-Agent-Base" className='text-blue-400 hover:underline'>Lume Agents</a>
          —highly interactive, lifelike characters that integrate seamlessly with {' '}
          <a href="https://www.nvidia.com/en-us/omniverse/" className='text-blue-400 hover:underline'>NVIDIA Omniverse</a> and {' '}
          <a href="https://www.unrealengine.com/" className='text-blue-400 hover:underline'>Unreal Engine</a>. Follow this guide to configure your environment, enable real-time facial 
          animations with Audio2Face or MetaHumans, and connect the Lume AI backend for advanced conversational capabilities.
        </p>
      </div>

      {/* Prerequisites Section */}
      <section className='space-y-6 bg-black/10 p-8 rounded-xl border border-white/5 backdrop-blur-sm'>
        <h2 className='text-3xl font-semibold text-shadow bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent'>
          1. Prerequisites
        </h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-medium text-shadow'>NVIDIA Omniverse</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Install the <a href="https://docs.omniverse.nvidia.com/launcher/latest/overview.html" className='text-blue-500 hover:underline'>Omniverse Launcher</a> and sign in with an NVIDIA account.</li>
              <li>Confirm <strong>NVIDIA Omniverse Create</strong> (or a compatible Omniverse app) is installed.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Unreal Engine</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Install <a href="https://www.unrealengine.com/en-US/download" className='text-blue-500 hover:underline'>Unreal Engine 5.x</a> via the Epic Games Launcher.</li>
              <li>Recommended hardware: an NVIDIA RTX GPU for smooth real-time rendering.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Audio2Face Extension</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Access it in the Omniverse Launcher &quot;Exchange&quot; tab.</li>
              <li>Install or enable Audio2Face to power your agent&apos;s facial animations.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Lume Agent Repository</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Clone or download the <strong>Elize-OS-Agent</strong> repository from <a href="https://github.com/LumeAIAgent/Lume-Agent-Base" className='text-blue-500 hover:underline'>GitHub</a>.</li>
              <li>Make sure you have <strong>Python 3.8+</strong> and <strong>Node.js 23+</strong> (or Yarn).</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>GPU Hardware</h3>
            <ul className='list-disc pl-6 text-shadow'>
              <li>An NVIDIA RTX GPU is strongly recommended for real-time rendering and AI workloads.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional sections can be added similarly */}
      {/* For brevity, I'll show how to structure one more section */}

      <section className='space-y-6 bg-black/10 p-8 rounded-xl border border-white/5 backdrop-blur-sm'>
        <h2 className='text-3xl font-semibold text-shadow bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent'>
          2. Omniverse Extension Setup
        </h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-medium text-shadow'>Launch Omniverse</h3>
            <ul className='list-disc pl-6 text-shadow'>
              <li>Sign in via the <strong>Omniverse Launcher</strong> and open <strong>Omniverse Create</strong>.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Enable or Install Extensions</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Go to <strong>Window &gt; Extensions</strong> and check that <strong>Audio2Face</strong> is active.</li>
              <li>(Optional) Install any additional connectors or extensions you might need.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Configure Settings</h3>
            <ul className='list-disc pl-6 text-shadow'>
              <li>In the <strong>Extensions</strong> panel, confirm correct GPU allocation and set any required file paths or streaming endpoints.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Unreal MetaHumans Setup Section */}
      <section className='space-y-6 bg-black/10 p-8 rounded-xl border border-white/5 backdrop-blur-sm'>
        <h2 className='text-3xl font-semibold text-shadow bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent'>
          3. Unreal MetaHumans Setup
        </h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-medium text-shadow'>Create or Select a MetaHuman</h3>
            <ul className='list-disc pl-6 text-shadow'>
              <li>Use <strong>MetaHuman Creator</strong> (online or via the Epic Games Launcher) to customize a digital human or choose an existing preset.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Import into Unreal Engine</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>In <strong>Unreal Engine</strong>, open the <strong>Quixel Bridge</strong> plugin to add your MetaHuman to the current project.</li>
              <li>After import, you&apos;ll have a ready-to-use MetaHuman with textures, blueprints, and animation assets.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Enable Live Link (Optional)</h3>
            <ul className='list-disc pl-6 text-shadow'>
              <li>If you need real-time data streaming or external animation input, go to <strong>Project Settings &gt; Plugins</strong> and enable <strong>Live Link</strong>.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Connect Unreal with Omniverse (Optional)</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Use the <a href="https://docs.omniverse.nvidia.com/audio2face/latest/user-manual/livelink-ue-plugin.html" className='text-blue-500 hover:underline'>Omniverse Connector for Unreal</a> to send assets between Omniverse and UE.</li>
              <li>Export or import as <strong>USD</strong> to share models and animations smoothly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Audio2Face Configuration Section */}
      <section className='space-y-6 bg-black/10 p-8 rounded-xl border border-white/5 backdrop-blur-sm'>
        <h2 className='text-3xl font-semibold text-shadow bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent'>
          4. Omniverse Audio2Face Configuration
        </h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-medium text-shadow'>Open Audio2Face</h3>
            <ul className='list-disc pl-6 text-shadow'>
              <li>Launch it from the <strong>Omniverse Launcher</strong> or enable it directly inside <strong>Omniverse Create</strong>.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Load a Head Mesh</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Use a MetaHuman head mesh exported to USD or one of Audio2Face&apos;s sample heads.</li>
              <li>Ensure that the mesh includes blendshapes or morph targets if you&apos;re using a custom model.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Map Blendshapes</h3>
            <ul className='list-disc pl-6 text-shadow'>
              <li>Align your character&apos;s facial rig with Audio2Face&apos;s blendshape structure so the agent&apos;s speech is accurately mirrored on the face.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Set Up Audio Input</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Choose your audio source (e.g., real-time speech from Lume AI or sample audio files).</li>
              <li>Test by playing the audio to verify synchronized facial movement.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Starting Up Section */}
      <section className='space-y-6 bg-black/10 p-8 rounded-xl border border-white/5 backdrop-blur-sm'>
        <h2 className='text-3xl font-semibold text-shadow bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent'>
          5. Starting Up the Lume System
        </h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-medium text-shadow'>Clone and Configure the Repository</h3>
            <div className="relative">
              <pre className='bg-black/50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-shadow'>
                <CopyButton code="git clone https://github.com/LumeAIAgent/Lume-Agent-Base.git
cd Lume-Agent-Base" />
                <code>git clone https://github.com/LumeAIAgent/Lume-Agent-Base.git
cd Lume-Agent-Base</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Install Dependencies</h3>
            <div className='space-y-4'>
              <div>
                <p className='font-medium text-shadow'>AI Backend (Lume)</p>
                <div className="relative">
                  <pre className='bg-black/50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-shadow'>
                    <CopyButton code="cd elize-os
pip install -r requirements.txt" />
                    <code>cd elize-os
pip install -r requirements.txt</code>
                  </pre>
                </div>
              </div>
              <div>
                <p className='font-medium text-shadow'>Web Client</p>
                <div className="relative">
                  <pre className='bg-black/50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-shadow'>
                    <CopyButton code="cd ../web-app
npm install" />
                    <code>cd ../web-app
npm install</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Set Up Environment Variables</h3>
            <p>In both <code className='bg-black/50 dark:bg-gray-800 px-2 py-1 rounded text-shadow'>elize-os</code> and <code className='bg-black/50 dark:bg-gray-800 px-2 py-1 rounded text-shadow'>web-app</code> directories, create a <code className='bg-black/50 dark:bg-gray-800 px-2 py-1 rounded text-shadow'>.env</code> file with your credentials:</p>
            <div className="relative">
              <pre className='bg-black/50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mt-2 text-shadow'>
                <CopyButton code="TTS_API_KEY=your-eleven-labs-key
TOKEN_CONTRACT_ADDRESS=0xYourTokenContract" />
                <code>TTS_API_KEY=your-eleven-labs-key
TOKEN_CONTRACT_ADDRESS=0xYourTokenContract</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Launch the System</h3>
            <ul className='list-disc pl-6 space-y-4 text-shadow'>
              <li>
                <p>Start the Python-based AI system:</p>
                <div className="relative">
                  <pre className='bg-black/50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mt-2 text-shadow'>
                    <CopyButton code="cd ../elize-os
python main.py" />
                    <code>cd ../elize-os
python main.py</code>
                  </pre>
                </div>
              </li>
              <li>
                <p>Run the Web Client in a separate terminal:</p>
                <div className="relative">
                  <pre className='bg-black/50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mt-2 text-shadow'>
                    <CopyButton code="cd ../web-app
npm run dev" />
                    <code>cd ../web-app
npm run dev</code>
                  </pre>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-medium text-shadow'>Final Steps</h3>
            <ul className='list-disc pl-6 space-y-2 text-shadow'>
              <li>Keep <strong>Omniverse</strong> or <strong>Unreal Engine</strong> running with your character loaded.</li>
              <li>Connect any required plugins for real-time animation streaming.</li>
              <li>Open your browser to the indicated local URL (typically <code className='bg-black/50 dark:bg-gray-800 px-2 py-1 rounded text-shadow'>http://localhost:3000</code>).</li>
              <li>Connect your wallet if token gating is enabled.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enhanced Conclusion Section */}
      <section className='space-y-6 mb-8 bg-black/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm'>
        <h2 className='text-4xl font-semibold text-shadow bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent'>
          Conclusion
        </h2>
        <p className='text-xl text-white text-shadow leading-relaxed'>
          With these steps, you&apos;re set to create {' '}
          <a href="https://github.com/LumeAIAgent/Lume-Agent-Base" className='text-blue-400 hover:underline'>Lume Agents</a> that combine advanced AI conversations, 
          real-time 3D rendering, and expressive facial animations. For deeper customizations—such as specialized motion 
          capture, advanced TTS configurations, or token-gated features—refer to the repository&apos;s README or visit our 
          community channels. 
          <span className='block mt-4 text-2xl text-green-400 font-semibold'>
            Enjoy building immersive AI experiences!
          </span>
        </p>
      </section>
      
    </div>
  </div>
  )
}

export default GetStarted