/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Maintenance templates resource type.
 */

export type PatchMaintenanceTemplateRequestDataType =
  | typeof MAINTENANCE_TEMPLATES
  | UnparsedObject;
export const MAINTENANCE_TEMPLATES = "maintenance_templates";
