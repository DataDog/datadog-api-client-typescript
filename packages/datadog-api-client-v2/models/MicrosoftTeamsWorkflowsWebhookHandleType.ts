/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the Workflows webhook handle resource type.
 */

export type MicrosoftTeamsWorkflowsWebhookHandleType =
  | typeof WORKFLOWS_WEBHOOK_HANDLE
  | UnparsedObject;
export const WORKFLOWS_WEBHOOK_HANDLE = "workflows-webhook-handle";
