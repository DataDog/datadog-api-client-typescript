/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AI postmortem response resource type.
 */

export type IncidentAIPostmortemResponseType =
  | typeof GET_INCIDENT_AI_POSTMORTEM_RESPONSE
  | UnparsedObject;
export const GET_INCIDENT_AI_POSTMORTEM_RESPONSE =
  "get_incident_ai_postmortem_response";
