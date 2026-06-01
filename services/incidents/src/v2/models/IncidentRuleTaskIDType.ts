import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The task ID for an incident rule.
 */
export type IncidentRuleTaskIDType =
  | typeof JIRA_CREATE_ISSUE_JOB
  | typeof NOTIFY_INCIDENT_HANDLES_JOB
  | typeof SERVICENOW_CREATE_INCIDENT_JOB
  | typeof SLACK_CREATE_CHANNEL_JOB
  | typeof ZOOM_CREATE_MEETING_JOB
  | typeof GOOGLE_MEET_CREATE_MEETING_JOB
  | typeof WORKFLOW_AUTOMATION_JOB
  | typeof MS_TEAMS_CREATE_MEETING_JOB
  | typeof GOOGLE_CHAT_CREATE_SPACE_JOB
  | typeof ZOOM_SUPPRESS_SUMMARIZATION_JOB
  | typeof MS_TEAMS_SUPPRESS_SUMMARIZATION_JOB
  | typeof GOOGLE_MEET_SUPPRESS_SUMMARIZATION_JOB
  | UnparsedObject;
export const JIRA_CREATE_ISSUE_JOB = "jira-create-issue-job";
export const NOTIFY_INCIDENT_HANDLES_JOB = "notify-incident-handles-job";
export const SERVICENOW_CREATE_INCIDENT_JOB = "servicenow-create-incident-job";
export const SLACK_CREATE_CHANNEL_JOB = "slack-create-channel-job";
export const ZOOM_CREATE_MEETING_JOB = "zoom-create-meeting-job";
export const GOOGLE_MEET_CREATE_MEETING_JOB = "google-meet-create-meeting-job";
export const WORKFLOW_AUTOMATION_JOB = "workflow-automation-job";
export const MS_TEAMS_CREATE_MEETING_JOB = "ms-teams-create-meeting-job";
export const GOOGLE_CHAT_CREATE_SPACE_JOB = "google-chat-create-space-job";
export const ZOOM_SUPPRESS_SUMMARIZATION_JOB =
  "zoom-suppress-summarization-job";
export const MS_TEAMS_SUPPRESS_SUMMARIZATION_JOB =
  "ms-teams-suppress-summarization-job";
export const GOOGLE_MEET_SUPPRESS_SUMMARIZATION_JOB =
  "google-meet-suppress-summarization-job";
