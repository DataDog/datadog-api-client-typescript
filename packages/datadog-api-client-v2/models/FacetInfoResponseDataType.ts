/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Users facet info resource type.
 */

export type FacetInfoResponseDataType =
  | typeof USERS_FACET_INFO
  | UnparsedObject;
export const USERS_FACET_INFO = "users_facet_info";
