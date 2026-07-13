import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource targeted by a dataset report schedule.
 */
export type DatasetReportScheduleResourceType =
  | typeof WIDGET_DATASET_LIST
  | UnparsedObject;
export const WIDGET_DATASET_LIST = "widget_dataset_list";
