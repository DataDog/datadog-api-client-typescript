import { UnparsedObject } from "@datadog/datadog-api-client";

import { ReportScheduleAuthor } from "./ReportScheduleAuthor";
import { ReportScheduleResource } from "./ReportScheduleResource";

/**
 * A related resource included with a report schedule.
 */
export type ReportScheduleIncludedResource =
  | ReportScheduleAuthor
  | ReportScheduleResource
  | UnparsedObject;
