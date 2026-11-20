/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
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

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
