import { UnparsedObject } from "@datadog/datadog-api-client";

import { APITriggerWrapper } from "./APITriggerWrapper";
import { AppTriggerWrapper } from "./AppTriggerWrapper";
import { CaseTriggerWrapper } from "./CaseTriggerWrapper";
import { ChangeEventTriggerWrapper } from "./ChangeEventTriggerWrapper";
import { DashboardTriggerWrapper } from "./DashboardTriggerWrapper";
import { DatabaseMonitoringTriggerWrapper } from "./DatabaseMonitoringTriggerWrapper";
import { DatastoreTriggerWrapper } from "./DatastoreTriggerWrapper";
import { GithubWebhookTriggerWrapper } from "./GithubWebhookTriggerWrapper";
import { IncidentTriggerWrapper } from "./IncidentTriggerWrapper";
import { MonitorTriggerWrapper } from "./MonitorTriggerWrapper";
import { NotebookTriggerWrapper } from "./NotebookTriggerWrapper";
import { OnCallTriggerWrapper } from "./OnCallTriggerWrapper";
import { ScheduleTriggerWrapper } from "./ScheduleTriggerWrapper";
import { SecurityTriggerWrapper } from "./SecurityTriggerWrapper";
import { SelfServiceTriggerWrapper } from "./SelfServiceTriggerWrapper";
import { SlackTriggerWrapper } from "./SlackTriggerWrapper";
import { SoftwareCatalogTriggerWrapper } from "./SoftwareCatalogTriggerWrapper";
import { WorkflowTriggerWrapper } from "./WorkflowTriggerWrapper";

/**
 * One of the triggers that can start the execution of a workflow.
 */
export type Trigger =
  | APITriggerWrapper
  | AppTriggerWrapper
  | CaseTriggerWrapper
  | ChangeEventTriggerWrapper
  | DatabaseMonitoringTriggerWrapper
  | DatastoreTriggerWrapper
  | DashboardTriggerWrapper
  | GithubWebhookTriggerWrapper
  | IncidentTriggerWrapper
  | MonitorTriggerWrapper
  | NotebookTriggerWrapper
  | OnCallTriggerWrapper
  | ScheduleTriggerWrapper
  | SecurityTriggerWrapper
  | SelfServiceTriggerWrapper
  | SlackTriggerWrapper
  | SoftwareCatalogTriggerWrapper
  | WorkflowTriggerWrapper
  | UnparsedObject;
