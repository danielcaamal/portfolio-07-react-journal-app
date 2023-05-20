import { useCreateNoteMutation, useFindAllNotesByUserIdLazyQuery, useUpdateNoteMutation } from "../../gql/graphql";


export const useGraphql = () => {
    const [ addNote, { data: dataCreate, loading: loadingCreate, error: errorCreate }] = useCreateNoteMutation();
    const [ updateNote, { data: dateUpdate, loading: dataLoading, error: errorLoading }] = useUpdateNoteMutation();
    const [ findAllByUserId, { data: dataFindAll, loading: loadingFindAll, error: errorFindAll }] = useFindAllNotesByUserIdLazyQuery();

    const errorMessage = errorCreate?.message || errorLoading?.message || errorFindAll?.message;
    const isLoading = loadingCreate || dataLoading || loadingFindAll;
    const hasError = !!errorMessage;

    return {
        addNote,
        updateNote,
        findAllByUserId,
        isLoading,
        hasError,
        errorMessage,
        dataCreate,
        dateUpdate,
        dataFindAll,
    }
};