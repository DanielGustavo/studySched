import topicsBoxDraft from '../repositories/topicsBoxDraftRepository';

export default function saveTopicsBoxDraft(draft) {
  const oldDraft = topicsBoxDraft.getDraft();

  const draftToSave = {
    ...oldDraft,
    ...draft,
  };

  if (draft?.topics instanceof Array === false) {
    draftToSave.topics = oldDraft?.topics ?? [];
  }

  topicsBoxDraft.saveDraft(draftToSave);
}
