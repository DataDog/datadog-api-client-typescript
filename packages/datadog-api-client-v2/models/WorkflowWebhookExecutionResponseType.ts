/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type for workflow webhook execution response
 */

export type WorkflowWebhookExecutionResponseType =
  | typeof WORKFLOW_WEBHOOK_EXECUTION
  | UnparsedObject;
export const WORKFLOW_WEBHOOK_EXECUTION = "workflow_webhook_execution";
