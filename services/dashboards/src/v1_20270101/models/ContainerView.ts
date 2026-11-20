import { UnparsedObject } from "@datadog/datadog-api-client";

import { DashboardInlineSchema37 } from "./DashboardInlineSchema37";
import { OrchestrationView } from "./OrchestrationView";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ContainerView =
  | OrchestrationView
  | DashboardInlineSchema37
  | UnparsedObject;
