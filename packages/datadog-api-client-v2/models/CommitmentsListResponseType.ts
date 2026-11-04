/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the commitments list response resource.
 */

export type CommitmentsListResponseType =
  | typeof COMMITMENTS_LIST_RESPONSE
  | UnparsedObject;
export const COMMITMENTS_LIST_RESPONSE = "commitments_list_response";
