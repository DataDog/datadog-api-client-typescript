/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of Google Cloud Usage Cost config post request.
 */

export type GCPUsageCostConfigPostRequestType =
  | typeof GCP_USAGE_COST_CONFIG_POST_REQUEST
  | UnparsedObject;
export const GCP_USAGE_COST_CONFIG_POST_REQUEST = "gcp_uc_config_post_request";
