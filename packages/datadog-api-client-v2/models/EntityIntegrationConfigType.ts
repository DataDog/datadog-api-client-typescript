/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource type for an entity integration configuration. Always `entity_integration_configs`.
 */

export type EntityIntegrationConfigType =
  | typeof ENTITY_INTEGRATION_CONFIGS
  | UnparsedObject;
export const ENTITY_INTEGRATION_CONFIGS = "entity_integration_configs";
