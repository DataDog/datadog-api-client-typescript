/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Persona for the search. Either track(s) or persona(s) must be specified.
 */

export type IssuesSearchRequestDataAttributesPersona =
  | typeof ALL
  | typeof BROWSER
  | typeof MOBILE
  | typeof BACKEND
  | UnparsedObject;
export const ALL = "ALL";
export const BROWSER = "BROWSER";
export const MOBILE = "MOBILE";
export const BACKEND = "BACKEND";
