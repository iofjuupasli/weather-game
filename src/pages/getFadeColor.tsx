import { Status } from "../model";
import { theme } from "../theme";

const statusFadeColorMap = {
    [Status.question]: theme.fadeQuestionColor,
    [Status.answer]: theme.fadeQuestionColor,
    [Status.right]: theme.successColor,
    [Status.wrong]: theme.failColor,
};

export const getFadeColor = (status: Status) => {
    return statusFadeColorMap[status];
};
