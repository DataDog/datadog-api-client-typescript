/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Zero data retention requirement for the organization's requests.
 */

export type AiGatewayZDRMode = typeof OFF | typeof REQUIRED | UnparsedObject;
export const OFF = "off";
export const REQUIRED = "required";
