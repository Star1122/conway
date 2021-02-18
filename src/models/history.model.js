import mongoose, { Schema } from 'mongoose';

const HistorySchema = new mongoose.Schema(
  {
    isFirstGeneration: { type: Schema.Types.Boolean },
    rowCount: { type: Schema.Types.Number },
    colCount: { type: Schema.Types.Number },
    priorStates: { type: Schema.Types.Array },
    newStates: { type: Schema.Types.Array },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('History', HistorySchema);
