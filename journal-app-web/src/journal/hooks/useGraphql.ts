import { useCreateNoteMutation, useFindAllNotesByUserIdLazyQuery, useFindOneNoteByIdLazyQuery, useRemoveFileNoteMutation, useUpdateNoteMutation } from "../../gql/graphql";


export const useGraphql = () => {
    const [ addNote, { data: dataCreate, loading: loadingCreate, error: errorCreate }] = useCreateNoteMutation();
    const [ updateNote, { data: dateUpdate, loading: dataLoading, error: errorLoading }] = useUpdateNoteMutation();
    const [ findAllByUserId, { data: dataFindAll, loading: loadingFindAll, error: errorFindAll }] = useFindAllNotesByUserIdLazyQuery();
    const [ findOneById, { data: dataFindOne, loading: loadingFindOne, error: errorFindOne }] = useFindOneNoteByIdLazyQuery();
    const [ removeFileNote, { data: dataRemoveFileNote, loading: loadingRemoveFileNote, error: errorRemoveFileNote }] = useRemoveFileNoteMutation();

    const errorMessage = errorCreate?.message || errorLoading?.message || errorFindAll?.message || errorFindOne?.message || errorRemoveFileNote?.message;
    const isLoading = loadingCreate || dataLoading || loadingFindAll || loadingFindOne || loadingRemoveFileNote;
    const hasError = !!errorMessage;

    return {
        addNote,
        updateNote,
        findAllByUserId,
        findOneById,
        removeFileNote,
        isLoading,
        hasError,
        errorMessage,
        dataCreate,
        dateUpdate,
        dataFindAll,
    }
};