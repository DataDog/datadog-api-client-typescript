import { UnparsedObject } from "@datadog/datadog-api-client";

import { LegacyIssueStreamRequest } from "./LegacyIssueStreamRequest";
import { UnifiedIssueStreamRequest } from "./UnifiedIssueStreamRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type IssueStreamRequest =
  | LegacyIssueStreamRequest
  | UnifiedIssueStreamRequest
  | UnparsedObject;
