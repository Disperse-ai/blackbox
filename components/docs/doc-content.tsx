import { DocSection } from "@/lib/docs";

interface DocContentProps {
  slug: string;
}

export function DocContent({ slug }: DocContentProps) {
  // This is a placeholder for actual documentation content
  // In a real application, you would fetch this from a CMS or markdown files

  const content = getDocContent(slug);

  return (
    <div className="prose prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

function getDocContent(slug: string): string {
  const contentMap: Record<string, string> = {
    installation: `
      <h1 id="installation">Installation</h1>
      <p>BlackBox can be installed on macOS, Windows, and Linux. Choose your platform below to get started.</p>
      
      <h2 id="macos-installation">macOS Installation</h2>
      <p>BlackBox supports both Intel and Apple Silicon Macs.</p>
      <pre><code>brew install blackbox-ai</code></pre>
      <p>Or download the installer from our website and follow the installation wizard.</p>
      
      <h2 id="windows-installation">Windows Installation</h2>
      <p>BlackBox requires Windows 10 or later.</p>
      <pre><code>winget install blackbox-ai</code></pre>
      <p>Alternatively, download the MSI installer from our website.</p>
      
      <h2 id="linux-installation">Linux Installation</h2>
      <p>For Ubuntu and Debian-based distributions:</p>
      <pre><code>sudo apt-get update
sudo apt-get install blackbox-ai</code></pre>
      <p>For other distributions, we provide AppImage and tarball packages.</p>
      
      <h2 id="verifying-installation">Verifying Installation</h2>
      <p>To verify that BlackBox was installed correctly, open a terminal or command prompt and run:</p>
      <pre><code>blackbox --version</code></pre>
      <p>You should see the version number of your BlackBox installation.</p>
    `,

    "quick-start": `
      <h1 id="quick-start">Quick Start Guide</h1>
      <p>Get up and running with BlackBox in minutes.</p>
      
      <h2 id="launching-blackbox">Launching BlackBox</h2>
      <p>After installation, launch BlackBox from your applications menu or by running <code>blackbox</code> in your terminal.</p>
      
      <h2 id="connecting-model">Connecting to a Model</h2>
      <p>BlackBox comes with several pre-configured models. To connect to a model:</p>
      <ol>
        <li>Click on the "Models" tab in the sidebar</li>
        <li>Select a model from the list</li>
        <li>Click "Connect"</li>
      </ol>
      <p>The first time you connect to a model, it may need to download. This can take several minutes depending on your internet connection.</p>
      
      <h2 id="first-prompt">Your First Prompt</h2>
      <p>Once connected to a model, you can start interacting with it:</p>
      <ol>
        <li>Type your prompt in the input field</li>
        <li>Press Enter or click the Send button</li>
        <li>Wait for the model to generate a response</li>
      </ol>
      
      <h2 id="saving-session">Saving Your Session</h2>
      <p>To save your conversation for later reference:</p>
      <ol>
        <li>Click the "Save" button in the top right corner</li>
        <li>Enter a name for your session</li>
        <li>Click "Save"</li>
      </ol>
      <p>You can access saved sessions from the "History" tab in the sidebar.</p>
    `,

    // Add more documentation content for other slugs
    "basic-concepts": `
      <h1 id="basic-concepts">Basic Concepts</h1>
      <p>Understanding the fundamental concepts of BlackBox will help you get the most out of the platform.</p>
      
      <h2 id="models">Models</h2>
      <p>Models are the AI engines that power BlackBox. Different models have different capabilities, strengths, and resource requirements.</p>
      <p>BlackBox supports various types of models:</p>
      <ul>
        <li><strong>Language Models</strong>: For text generation, summarization, and conversation</li>
        <li><strong>Image Models</strong>: For image generation and editing</li>
        <li><strong>Multimodal Models</strong>: Combining text and image understanding</li>
      </ul>
      
      <h2 id="plugins">Plugins</h2>
      <p>Plugins extend BlackBox's functionality by adding new capabilities or integrating with external services.</p>
      <p>Examples of plugins include:</p>
      <ul>
        <li>Web search</li>
        <li>Code execution</li>
        <li>Document analysis</li>
        <li>Data visualization</li>
      </ul>
      
      <h2 id="sessions">Sessions</h2>
      <p>A session represents a conversation or interaction with a model. Sessions can be saved, shared, and continued later.</p>
      
      <h2 id="prompts">Prompts</h2>
      <p>Prompts are the inputs you provide to the model. Crafting effective prompts is key to getting the results you want.</p>
      <p>Learn more about prompt engineering in our <a href="/docs/prompt-engineering">Prompt Engineering Guide</a>.</p>
    `,

    // Default content for any other slug
    default: `
      <h1 id="documentation">Documentation for ${slug}</h1>
      <p>This is a placeholder for the ${slug} documentation content.</p>
      <h2 id="section-1">Getting Started</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
      <h2 id="section-2">Advanced Usage</h2>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h3 id="subsection-1">Configuration Options</h3>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <h2 id="section-3">Troubleshooting</h2>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
  };

  return contentMap[slug] || contentMap.default;
}
