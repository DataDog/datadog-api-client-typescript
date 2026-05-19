/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of automated action to perform when the rule triggers. `execute_workflow` runs a Datadog workflow; `assign_agent` assigns an AI agent to the case.
 */

export type AutomationRuleActionType =
  | typeof EXECUTE_WORKFLOW
  | typeof ASSIGN_AGENT
  | UnparsedObject;
export const EXECUTE_WORKFLOW = "execute_workflow";
export const ASSIGN_AGENT = "assign_agent";
