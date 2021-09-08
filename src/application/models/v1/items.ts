export interface Items {
  description: string,
  is_completed: boolean,
  completed_at?: null,
  due?: Date,
  urgency?: number,
  updated_by?: number,
  updated_at?: Date,
  created_at: Date,
  assignee_id?: number,
  task_id?: number,
}

export let item_attributes: Items[] = [
  {
    description: "First Item",
    is_completed: false,
    due: new Date("2019-07-31T09:34:00+00:00"),
    urgency: 1,
    created_at: new Date("2019-07-25T09:34:08+00:00"),
    updated_at: new Date("2019-07-25T09:34:08+00:00"),
    assignee_id: 556396,
  },
  {
    description: "Second Item",
    is_completed: false,
    due: new Date("2019-07-31T09:34:00+00:00"),
    urgency: 1,
    created_at: new Date("2019-07-25T09:34:08+00:00"),
    updated_at: new Date("2019-07-25T09:34:08+00:00"),
    assignee_id: 556396,
  }
]