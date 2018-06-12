import * as mongoose from 'mongoose';

var Schema = mongoose.Schema;

export default mongoose.model('Players', new Schema({}), 'players');
