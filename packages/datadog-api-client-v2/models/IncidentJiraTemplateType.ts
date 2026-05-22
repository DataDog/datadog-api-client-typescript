/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Incident Jira template resource type.
 */

export type IncidentJiraTemplateType =
  | typeof INCIDENTS_JIRA_TEMPLATES
  | UnparsedObject;
export const INCIDENTS_JIRA_TEMPLATES = "incidents_jira_templates";
