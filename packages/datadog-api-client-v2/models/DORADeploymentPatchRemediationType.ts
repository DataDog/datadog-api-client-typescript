/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of remediation action taken. Required when the failed deployment must be linked to a remediation deployment.
 */

export type DORADeploymentPatchRemediationType =
  | typeof ROLLBACK
  | typeof ROLLFORWARD
  | UnparsedObject;
export const ROLLBACK = "rollback";
export const ROLLFORWARD = "rollforward";
