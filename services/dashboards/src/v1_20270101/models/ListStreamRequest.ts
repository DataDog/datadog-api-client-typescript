import { UnparsedObject } from "@datadog/datadog-api-client";

import { ApmRecommendationsStreamRequest } from "./ApmRecommendationsStreamRequest";
import { CaseStreamRequest } from "./CaseStreamRequest";
import { DatabaseRecommendationsStreamRequest } from "./DatabaseRecommendationsStreamRequest";
import { DataObservabilityAssetsRequest } from "./DataObservabilityAssetsRequest";
import { DetectionRuleStreamRequest } from "./DetectionRuleStreamRequest";
import { DoraListStreamRequest } from "./DoraListStreamRequest";
import { EventsListStreamRequest } from "./EventsListStreamRequest";
import { IncidentsStreamRequest } from "./IncidentsStreamRequest";
import { IssueStreamRequest } from "./IssueStreamRequest";
import { WatchdogAlertsRequest } from "./WatchdogAlertsRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ListStreamRequest =
  | EventsListStreamRequest
  | IssueStreamRequest
  | CaseStreamRequest
  | WatchdogAlertsRequest
  | IncidentsStreamRequest
  | DatabaseRecommendationsStreamRequest
  | ApmRecommendationsStreamRequest
  | DetectionRuleStreamRequest
  | DataObservabilityAssetsRequest
  | DoraListStreamRequest
  | UnparsedObject;
