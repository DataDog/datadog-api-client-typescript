/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Facet info request resource type.
 */

export type FacetInfoRequestDataType =
  | typeof USERS_FACET_INFO_REQUEST
  | typeof ACCOUNTS_FACET_INFO_REQUEST
  | UnparsedObject;
export const USERS_FACET_INFO_REQUEST = "users_facet_info_request";
export const ACCOUNTS_FACET_INFO_REQUEST = "accounts_facet_info_request";
