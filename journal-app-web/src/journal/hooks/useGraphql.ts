import { useCreateNoteMutation, useFindAllNotesByUserIdLazyQuery, useFindOneNoteByIdLazyQuery, useRemoveFileNoteMutation, useRemoveNoteMutation, useUpdateNoteMutation } from "../../gql/graphql";


export const useGraphql = () => {
    const [ addNote, { data: dataCreate, loading: loadingCreate, error: errorCreate }] = useCreateNoteMutation();
    const [ updateNote, { data: dateUpdate, loading: dataLoading, error: errorLoading }] = useUpdateNoteMutation();
    const [ findAllByUserId, { data: dataFindAll, loading: loadingFindAll, error: errorFindAll }] = useFindAllNotesByUserIdLazyQuery();
    const [ findOneById, { data: dataFindOne, loading: loadingFindOne, error: errorFindOne }] = useFindOneNoteByIdLazyQuery({ 
        fetchPolicy: 'network-only',
    });
    const [ removeFileNote, { data: dataRemoveFileNote, loading: loadingRemoveFileNote, error: errorRemoveFileNote }] = useRemoveFileNoteMutation();
    const [ removeNote, { data: dataDeleteNote, loading: loadingDeleteNote, error: errorDeleteNote }] = useRemoveNoteMutation();

    const errorMessage = errorCreate?.message || errorLoading?.message || errorFindAll?.message || errorFindOne?.message || errorRemoveFileNote?.message || errorDeleteNote?.message;
    const isLoading = loadingCreate || dataLoading || loadingFindAll || loadingFindOne || loadingRemoveFileNote || loadingDeleteNote;
    const hasError = !!errorMessage;

    return {
        addNote,
        updateNote,
        findAllByUserId,
        findOneById,
        removeFileNote,
        removeNote,
        isLoading,
        hasError,
        errorMessage,
        dataCreate,
        dateUpdate,
        dataFindAll,
    }
};