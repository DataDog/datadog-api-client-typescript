import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI postmortem response resource type.
 */
export type IncidentAIPostmortemResponseType =
  | typeof GET_INCIDENT_AI_POSTMORTEM_RESPONSE
  | UnparsedObject;
export const GET_INCIDENT_AI_POSTMORTEM_RESPONSE =
  "get_incident_ai_postmortem_response";
