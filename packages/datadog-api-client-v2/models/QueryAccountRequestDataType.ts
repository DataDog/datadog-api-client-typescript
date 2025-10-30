/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Query account request resource type.
 */

export type QueryAccountRequestDataType =
  | typeof QUERY_ACCOUNT_REQUEST
  | UnparsedObject;
export const QUERY_ACCOUNT_REQUEST = "query_account_request";
