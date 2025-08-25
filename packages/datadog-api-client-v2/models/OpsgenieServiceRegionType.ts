/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The region for the Opsgenie service.
 */

export type OpsgenieServiceRegionType =
  | typeof US
  | typeof EU
  | typeof CUSTOM
  | UnparsedObject;
export const US = "us";
export const EU = "eu";
export const CUSTOM = "custom";
