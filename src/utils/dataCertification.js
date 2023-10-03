import { pathReact, certificationPathGitGitHubBash, pathHTMLCSS, pathJavaScript, pathTypeScript, pathViteNPM } from "./urlsCertifications";
import { dataSkills } from "./dataSkills";

const dataCertification = [    
    {
        name: 'React.js',
        icon: dataSkills.React,     
        data: pathReact,   
    },
    {
        name: 'HTML / CSS',
        icon: dataSkills.HTML,        
        icon2: dataSkills.CSS,
        data: pathHTMLCSS,   
        
    },
    {
        name: 'JavaScript',
        icon: dataSkills.JavaScript,   
        data:  pathJavaScript, 
    },
    {
        name: 'TypeScript',
        icon: dataSkills.TypeScript,        
        data: pathTypeScript,
    },
    {
        name: 'Git / GiHub / Bash',
        icon: dataSkills.Git,
        icon2: dataSkills.GitHub,
        icon3: dataSkills.Bash,
        data: certificationPathGitGitHubBash,       
    },
    {
        name: 'Vite.js / NPM',
        icon: dataSkills.Vite,
        icon2: dataSkills.NPM,
        data: pathViteNPM,
    },
];

export { dataCertification };