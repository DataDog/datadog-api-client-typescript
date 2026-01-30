/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type for workflow headless execution request
 */

export type WorkflowHeadlessExecutionRequestType =
  | typeof WORKFLOW_HEADLESS_EXECUTION_REQUEST
  | UnparsedObject;
export const WORKFLOW_HEADLESS_EXECUTION_REQUEST =
  "workflow_headless_execution_request";
