import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiFirebase,
    SiFigma,
    SiVisualstudiocode,
} from "react-icons/si";

const SVGIcon = {
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    html5: <SiHtml5 />,
    css3: <SiCss3 />,
    nodejs: <SiNodedotjs />,
    expressjs: <SiExpress />,
    react: <SiReact />,
    nextjs: <SiNextdotjs />,
    tailwindcss: <SiTailwindcss />,
    mongodb: <SiMongodb />,
    firebase: <SiFirebase />,
    figma: <SiFigma />,
    visualstudiocode: <SiVisualstudiocode />,
};

export type IconTypes = keyof typeof SVGIcon;
export default function Icons(icon: IconTypes) {
    return <>{SVGIcon[icon]}</>;
}
