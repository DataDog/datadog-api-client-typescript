import { UnparsedObject } from "@datadog/datadog-api-client";

import { APMIssueStreamQuery } from "./APMIssueStreamQuery";
import { LogsIssueStreamQuery } from "./LogsIssueStreamQuery";
import { RUMIssueStreamQuery } from "./RUMIssueStreamQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type LegacyIssueStreamRequest20270101Query =
  | APMIssueStreamQuery
  | RUMIssueStreamQuery
  | LogsIssueStreamQuery
  | UnparsedObject;
