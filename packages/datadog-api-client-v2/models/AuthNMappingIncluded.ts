/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Role } from "./Role";
import { SAMLAssertionAttribute } from "./SAMLAssertionAttribute";

import { UnparsedObject } from "../util";

/**
 * Included data in the AuthN Mapping response.
 */

export type AuthNMappingIncluded =
  | SAMLAssertionAttribute
  | Role
  | UnparsedObject;
