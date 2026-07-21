/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource type for a DDSQL tabular query response.
 */

export type DdsqlTabularQueryResponseType =
  | typeof DDSQL_QUERY_RESPONSE
  | UnparsedObject;
export const DDSQL_QUERY_RESPONSE = "ddsql_query_response";
