import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { WorkflowRunAsInitiator } from "./WorkflowRunAsInitiator";
import { WorkflowRunAsOwner } from "./WorkflowRunAsOwner";
import { WorkflowRunAsServiceAccount } from "./WorkflowRunAsServiceAccount";

/**
 * Identity used to run the workflow.
 */
export type WorkflowRunAs =
  | WorkflowRunAsOwner
  | WorkflowRunAsServiceAccount
  | WorkflowRunAsInitiator
  | UnparsedObject;
