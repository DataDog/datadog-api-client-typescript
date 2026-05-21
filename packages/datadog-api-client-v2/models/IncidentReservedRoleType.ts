/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Incident reserved role resource type.
 */

export type IncidentReservedRoleType =
  | typeof INCIDENT_RESERVED_ROLES
  | UnparsedObject;
export const INCIDENT_RESERVED_ROLES = "incident_reserved_roles";
