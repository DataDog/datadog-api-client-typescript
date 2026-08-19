/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The integration the action pattern applies to.
 */

export type ExecutionPolicyIntegration =
  | typeof INTEGRATION_KUBERNETES
  | typeof INTEGRATION_SCRIPT
  | typeof INTEGRATION_REMOTE_ACTION
  | UnparsedObject;
export const INTEGRATION_KUBERNETES = "INTEGRATION_KUBERNETES";
export const INTEGRATION_SCRIPT = "INTEGRATION_SCRIPT";
export const INTEGRATION_REMOTE_ACTION = "INTEGRATION_REMOTE_ACTION";
