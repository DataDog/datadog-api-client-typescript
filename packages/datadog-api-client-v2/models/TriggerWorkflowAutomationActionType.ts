/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Indicates that the action triggers a Workflow Automation.
 */

export type TriggerWorkflowAutomationActionType =
  | typeof TRIGGER_WORKFLOW_AUTOMATION
  | UnparsedObject;
export const TRIGGER_WORKFLOW_AUTOMATION = "workflow";
