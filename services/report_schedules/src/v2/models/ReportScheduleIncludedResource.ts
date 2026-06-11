import { UnparsedObject } from "@datadog/datadog-api-client";

import { ReportScheduleAuthor } from "./ReportScheduleAuthor";

/**
 * A related resource included with a report schedule.
 */
export type ReportScheduleIncludedResource =
  | ReportScheduleAuthor
  | UnparsedObject;
