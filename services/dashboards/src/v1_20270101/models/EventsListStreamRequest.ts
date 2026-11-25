import { UnparsedObject } from "@datadog/datadog-api-client";

import { AuditStreamRequest } from "./AuditStreamRequest";
import { ErrorsStreamRequest } from "./ErrorsStreamRequest";
import { EventPatternStreamRequest } from "./EventPatternStreamRequest";
import { EventPlatformStreamRequest } from "./EventPlatformStreamRequest";
import { EventStreamRequest } from "./EventStreamRequest";
import { LogsPatternStreamRequest } from "./LogsPatternStreamRequest";
import { LogsStreamRequest } from "./LogsStreamRequest";
import { LogsTransactionStreamRequest } from "./LogsTransactionStreamRequest";
import { RecommendationsStreamRequest } from "./RecommendationsStreamRequest";
import { RumStreamRequest } from "./RumStreamRequest";
import { SecurityRuntimePatternStreamRequest } from "./SecurityRuntimePatternStreamRequest";
import { SecurityRuntimeStreamRequest } from "./SecurityRuntimeStreamRequest";
import { TraceStreamRequest } from "./TraceStreamRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type EventsListStreamRequest =
  | EventPlatformStreamRequest
  | LogsStreamRequest
  | LogsPatternStreamRequest
  | LogsTransactionStreamRequest
  | AuditStreamRequest
  | TraceStreamRequest
  | ErrorsStreamRequest
  | EventStreamRequest
  | EventPatternStreamRequest
  | SecurityRuntimePatternStreamRequest
  | RumStreamRequest
  | RecommendationsStreamRequest
  | SecurityRuntimeStreamRequest
  | UnparsedObject;
