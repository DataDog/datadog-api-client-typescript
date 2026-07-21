/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * ServiceNow record prompt resource type.
 */

export type IncidentServiceNowRecordPromptType =
  | typeof INCIDENT_SERVICENOW_RECORD_PROMPT
  | UnparsedObject;
export const INCIDENT_SERVICENOW_RECORD_PROMPT =
  "incident_servicenow_record_prompt";
