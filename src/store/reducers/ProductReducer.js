const initialState = {
    products: [],
    categories: null,
    pagination: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    totalPages: action.totalPages,
                    totalElements: action.totalElements,
                    pageSize: action.pageSize,
                    lastPage: action.lastPage
                }
            };
        default:
            return state;
    }
}

export default productReducer;