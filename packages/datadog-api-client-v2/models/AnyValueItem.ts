/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A single item in an array of arbitrary values, which can be a string, number, object, or boolean.
 */

export type AnyValueItem =
  | string
  | number
  | { [key: string]: any }
  | boolean
  | UnparsedObject;
