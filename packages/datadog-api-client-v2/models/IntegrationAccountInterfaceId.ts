/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Supported interface (source-type) ids (the `interface_id` path scope).
 */

export type IntegrationAccountInterfaceId =
  | typeof ELASTIC_CLOUD
  | typeof ELASTIC_CLOUD_CCM
  | typeof TWILIO
  | UnparsedObject;
export const ELASTIC_CLOUD = "elastic-cloud";
export const ELASTIC_CLOUD_CCM = "elastic-cloud-ccm";
export const TWILIO = "twilio";
