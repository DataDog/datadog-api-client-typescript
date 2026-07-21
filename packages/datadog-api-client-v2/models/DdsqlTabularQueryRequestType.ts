/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource type for a DDSQL tabular query request.
 */

export type DdsqlTabularQueryRequestType =
  | typeof DDSQL_QUERY_REQUEST
  | UnparsedObject;
export const DDSQL_QUERY_REQUEST = "ddsql_query_request";
