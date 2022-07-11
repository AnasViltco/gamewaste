import _ from "lodash";

export const getUniqueArray = (data: any[] = [], value: string) => {
    let unique = data.map((item: any) => item[value]);
    return _.uniq(unique);
};


export const platformsArray = (platform: any) => {
    return platform.split(', ');
};
