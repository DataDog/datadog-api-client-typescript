/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Denotes whether mapping keys were available for this endpoint.
 */

export type BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus =
  | typeof OK
  | typeof NOT_FOUND
  | UnparsedObject;
export const OK = "OK";
export const NOT_FOUND = "NOT_FOUND";
