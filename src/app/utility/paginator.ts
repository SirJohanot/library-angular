export function getNumberOfPagesToContainEntities(entities: any[], entitiesPerPage: number): number {
    const entitiesNumber = entities.length;
    return Math.ceil(entitiesNumber / entitiesPerPage);
}

export function getEntitiesOfPage(entitiesList: any[], targetPage: number, entitiesPerPage: number): any[] {
    if (!entitiesList.length) {
        return entitiesList;
    }

    const acceptableTargetPage = getClosestAcceptableTargetPage(entitiesList, targetPage, entitiesPerPage);
    const entitiesNumber = entitiesList.length;

    const firstEntityOfPageIndex = entitiesPerPage * (acceptableTargetPage - 1);

    let lastEntityOfPageIndex = firstEntityOfPageIndex + entitiesPerPage;
    if (lastEntityOfPageIndex > entitiesNumber) {
        lastEntityOfPageIndex = entitiesNumber;
    }

    return entitiesList.slice(firstEntityOfPageIndex, lastEntityOfPageIndex);
}

export function getClosestAcceptableTargetPage(entitiesList: any, targetPage: number, entitiesPerPage: number): number {
    const maxPage = getNumberOfPagesToContainEntities(entitiesList, entitiesPerPage);
    if (targetPage < 1) {
        return 1;
    } else if (targetPage > maxPage) {
        return maxPage;
    }
    return targetPage;
}
