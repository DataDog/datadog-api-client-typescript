/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Action to perform on the assignment. Can be "assign" or "un_assign".
 */

export type IntegrationAssignmentDataAttributesRequestAction =
  | typeof ASSIGN
  | typeof UN_ASSIGN
  | UnparsedObject;
export const ASSIGN = "assign";
export const UN_ASSIGN = "un_assign";
