function scoringOkayLove(love, confidence) {
    if (love < 100 && love > 0 && confidence >= 100) {
        return 'withHighConfidence';
    }
    else if (love < 100 && love > 0 && confidence > 0 && confidence < 100) {
        return 'withMedConfidence';
    }
    else if (love < 100 && love > 0 && confidence <= 0) {
        return 'noConfidence';
    }
    return undefined;
}
export default scoringOkayLove;