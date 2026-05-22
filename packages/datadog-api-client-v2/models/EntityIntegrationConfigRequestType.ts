/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource type for the entity integration configuration create or update request. Always `entity_integration_config_requests`.
 */

export type EntityIntegrationConfigRequestType =
  | typeof ENTITY_INTEGRATION_CONFIG_REQUESTS
  | UnparsedObject;
export const ENTITY_INTEGRATION_CONFIG_REQUESTS =
  "entity_integration_config_requests";
