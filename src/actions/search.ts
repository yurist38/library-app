enum SEARCH_ACTION_TYPES {
  SEARCH_SET_FILTER = 'SEARCH_SET_FILTER',
}

interface ISearchSetFilter {
  type: SEARCH_ACTION_TYPES.SEARCH_SET_FILTER;
  payload: {
    filter: string,
  };
}

function searchSetFilter(filter: string): ISearchSetFilter {
  return {
    payload: {
      filter,
    },
    type: SEARCH_ACTION_TYPES.SEARCH_SET_FILTER,
  };
}

export { ISearchSetFilter };
export default {
  searchSetFilter,
  types: {
    ...SEARCH_ACTION_TYPES,
  },
};
