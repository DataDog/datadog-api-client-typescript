/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Incident timeline entry resource type.
 */

export type IncidentTimelineEntryType =
  | typeof INCIDENT_TIMELINE_CELLS
  | UnparsedObject;
export const INCIDENT_TIMELINE_CELLS = "incident_timeline_cells";
