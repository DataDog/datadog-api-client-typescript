/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the component. Supported types are library, application, and operating-system.
 */

export type CycloneDXComponentType =
  | typeof LIBRARY
  | typeof APPLICATION
  | typeof OPERATING_SYSTEM
  | UnparsedObject;
export const LIBRARY = "library";
export const APPLICATION = "application";
export const OPERATING_SYSTEM = "operating-system";
