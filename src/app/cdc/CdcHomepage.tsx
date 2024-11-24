import React from 'react';
import ColorThemeSwitcher from '@/app/cdc/ColorThemeSwitcher';
import { getDependencyVersion } from './utils';

interface FeatItem {
    name: string;
}

const features: FeatItem[] = [
    { name: `Next.js ${getDependencyVersion('next', 'minor')}` },
    { name: `React ${getDependencyVersion('react', 'major')}` },
    { name: `Tailwind CSS ${getDependencyVersion('tailwindcss', 'patch')}` },
    { name: `TypeScript ${getDependencyVersion('typescript', 'major')}` },
    { name: "Dark Mode support" },
    { name: "Default .gitignore / next.config" },
    { name: "Deploy to GitHub Pages" },
];

const Feature: React.FC<FeatItem> = ({ name }) => (
    <li className="flex items-center text-gray-900 mt-2">
        <svg className="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke="green">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-3 text-md font-bold font-pj">{name}</span>
    </li>
);

const CdcHomePage: React.FC = () => {
    return (
        <div>
            <section className="full-viewport py-12 bg-white dark:bg-black sm:py-16 lg:py-20">

                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-gray-50 rounded-3xl">

                        {/* Header */}
                        <div className="px-0 mx-auto max-w-7xl">
                            <div className="max-w-md">


                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-blue-400 to-violet-950 text-transparent bg-clip-text">
                                        cdc homepage.
                                    </h2>
                                    <ColorThemeSwitcher />
                                </div>

                                <p className="mt-4 text-sm font-normal leading-6 text-gray-500">
                                    Get started with a static site using Next.js, Tailwind CSS, and TypeScript. Deploy to GitHub Pages using GitHub Actions.
                                </p>

                                <div className="mt-4">
                                    <a href="https://github.com/codesign-cloud/cdc-homepage" title="CDC Homepage" className="inline-flex items-center text-base font-medium text-gray-900 group">
                                        View repo
                                        <svg className="w-5 h-5 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>


                        <ul className="flex flex-col flex-wrap mt-8">
                            {features.map((item, index) => (
                                <Feature key={index} {...item} />
                            ))}
                        </ul>

                        <div className="mt-8 text-center sm:mt-12">
                            <div className="relative inline-flex group">
                                <div
                                    className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                                    style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}
                                ></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CdcHomePage;
