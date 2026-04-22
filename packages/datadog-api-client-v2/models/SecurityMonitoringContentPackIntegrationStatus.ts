/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The installation status of the related integration
 */

export type SecurityMonitoringContentPackIntegrationStatus =
  | typeof INSTALLED
  | typeof AVAILABLE
  | typeof PARTIALLY_INSTALLED
  | typeof DETECTED
  | typeof ERROR
  | UnparsedObject;
export const INSTALLED = "installed";
export const AVAILABLE = "available";
export const PARTIALLY_INSTALLED = "partially_installed";
export const DETECTED = "detected";
export const ERROR = "error";
