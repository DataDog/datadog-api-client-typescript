/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type identifier for a retention list request.
 */

export type ProductAnalyticsRetentionListRequestType =
  | typeof RETENTION_LIST_REQUEST
  | UnparsedObject;
export const RETENTION_LIST_REQUEST = "retention_list_request";
