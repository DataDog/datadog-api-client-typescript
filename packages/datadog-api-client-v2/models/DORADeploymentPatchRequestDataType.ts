/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API type for DORA deployment patch request.
 */

export type DORADeploymentPatchRequestDataType =
  | typeof DORA_DEPLOYMENT_PATCH_REQUEST
  | UnparsedObject;
export const DORA_DEPLOYMENT_PATCH_REQUEST = "dora_deployment_patch_request";
