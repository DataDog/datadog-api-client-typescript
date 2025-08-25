/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Type of GCP Usage Cost config.
*/

export type GCPUsageCostConfigType = typeof GCP_UC_CONFIG | UnparsedObject;
export const GCP_UC_CONFIG = 'gcp_uc_config';