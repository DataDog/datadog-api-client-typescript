/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the service repository info lookup.
 */

export type ServiceRepositoryInfoStatus =
  | typeof SUCCESS
  | typeof NOT_FOUND
  | typeof NO_REPOSITORY
  | typeof INTERNAL_ERROR
  | typeof UNKNOWN
  | UnparsedObject;
export const SUCCESS = "success";
export const NOT_FOUND = "not_found";
export const NO_REPOSITORY = "no_repository";
export const INTERNAL_ERROR = "internal_error";
export const UNKNOWN = "unknown";
