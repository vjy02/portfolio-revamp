import packageJson from '../../../package.json';

type DependencyVersionType = 'major' | 'minor' | 'patch' | 'full' | 'majorOnly' | 'minorOnly' | 'patchOnly';

export function getDependencyVersion(dependencyName: string, versionType: DependencyVersionType = 'full'): string | number | null {
    const dependencies = packageJson.dependencies as { [key: string]: string };
    const devDependencies = packageJson.devDependencies as { [key: string]: string };
    const version = dependencies[dependencyName] || devDependencies[dependencyName];
    if (!version) return null;

    const versionWithoutPrefix = version.replace(/^[~^]/, '');
    const versionParts = versionWithoutPrefix.split('.');

    switch (versionType) {
        case 'major':
            return parseInt(versionParts[0], 10);
        case 'minor':
            return versionParts.length >= 2 ? `${versionParts[0]}.${versionParts[1]}` : versionWithoutPrefix;
        case 'patch':
            return versionParts.length >= 3 ? `${versionParts[0]}.${versionParts[1]}.${versionParts[2]}` : versionWithoutPrefix;
        case 'majorOnly':
            return versionParts[0];
        case 'minorOnly':
            return versionParts.length >= 2 ? versionParts[1] : '0';
        case 'patchOnly':
            return versionParts.length >= 3 ? versionParts[2] : '0';
        default:
        case 'full':
            return versionWithoutPrefix;
    }
}