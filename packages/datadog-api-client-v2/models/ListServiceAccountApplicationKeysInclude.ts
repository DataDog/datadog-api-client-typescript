/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of ListServiceAccountApplicationKeysInclude object.
 */

export type ListServiceAccountApplicationKeysInclude =
  | typeof LEAK_INFORMATION
  | typeof OWNED_BY
  | UnparsedObject;
export const LEAK_INFORMATION = "leak_information";
export const OWNED_BY = "owned_by";
