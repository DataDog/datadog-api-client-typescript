/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of GCP Usage Cost config patch request.
 */

export type GCPUsageCostConfigPatchRequestType =
  | typeof GCP_USAGE_COST_CONFIG_PATCH_REQUEST
  | UnparsedObject;
export const GCP_USAGE_COST_CONFIG_PATCH_REQUEST =
  "gcp_usage_cost_config_patch_request";
