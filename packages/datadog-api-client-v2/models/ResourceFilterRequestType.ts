/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Constant string to identify the request type.
 */

export type ResourceFilterRequestType =
  | typeof CSM_RESOURCE_FILTER
  | UnparsedObject;
export const CSM_RESOURCE_FILTER = "csm_resource_filter";
