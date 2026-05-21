/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Types of related objects to include.
 */

export type IncidentSearchIncidentsIncludeType =
  | typeof INCIDENT_TYPE
  | typeof IMPACTS
  | typeof USERS
  | typeof RESPONDERS
  | typeof INTEGRATIONS
  | typeof ATTACHMENTS
  | UnparsedObject;
export const INCIDENT_TYPE = "incident_type";
export const IMPACTS = "impacts";
export const USERS = "users";
export const RESPONDERS = "responders";
export const INTEGRATIONS = "integrations";
export const ATTACHMENTS = "attachments";
