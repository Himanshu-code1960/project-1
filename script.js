const { exec } = require('child_process');
df
// TailwindCSS Installation Script

// Import necessary modules

// Function to execute shell commands
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
            } else if (stderr) {
                reject(`Stderr: ${stderr}`);
            } else {
                resolve(stdout);
            }
        });
    });
}

// Main function to install TailwindCSS
async function installTailwindCSS() {
    try {
        console.log('Initializing npm project...');
        await runCommand('npm init -y');
        console.log('Installing TailwindCSS...');
        await runCommand('npm install tailwindcss');
        console.log('Creating TailwindCSS configuration file...');
        await runCommand('npx tailwindcss init');
        console.log('TailwindCSS installation completed successfully.');
    } catch (error) {
        console.error(error);
    }
}

// Run the installation
installTailwindCSS();