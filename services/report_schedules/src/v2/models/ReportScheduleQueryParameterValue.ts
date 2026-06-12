import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A query parameter value applied when rendering the report, either a single string or a list of strings.
 */
export type ReportScheduleQueryParameterValue =
  | string
  | Array<string>
  | UnparsedObject;
