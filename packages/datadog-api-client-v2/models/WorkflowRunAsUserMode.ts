/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The effective type of identity used to run the workflow.
 */

export type WorkflowRunAsUserMode =
  | typeof OWNER
  | typeof SERVICE_ACCOUNT
  | typeof INITIATOR
  | UnparsedObject;
export const OWNER = "owner";
export const SERVICE_ACCOUNT = "service_account";
export const INITIATOR = "initiator";
