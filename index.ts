import * as Immutable from 'immutable'

export interface RecordBase <Change, This extends RecordBase<Change, This>> {
  merge(change: Change): This
}

export default function Record <Fields, Change, This extends RecordBase<Change, This> & Fields>(defaults: Fields, name?: string): (init: Change) => This {
  return Immutable.Record(defaults, name) as any
}
