/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A reference to a resource related to an incident impact.
 */

export type IncidentImpactRelatedObject =
  | typeof INCIDENT
  | typeof CREATED_BY_USER
  | typeof LAST_MODIFIED_BY_USER
  | UnparsedObject;
export const INCIDENT = "incident";
export const CREATED_BY_USER = "created_by_user";
export const LAST_MODIFIED_BY_USER = "last_modified_by_user";
