/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * List connections response resource type.
 */

export type ListConnectionsResponseDataType =
  | typeof LIST_CONNECTIONS_RESPONSE
  | UnparsedObject;
export const LIST_CONNECTIONS_RESPONSE = "list_connections_response";
