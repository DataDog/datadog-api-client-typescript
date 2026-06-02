/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Salesforce incident template resource type.
 */

export type SalesforceIncidentsTemplateType =
  | typeof SALESFORCE_INCIDENTS_INCIDENT_TEMPLATE
  | UnparsedObject;
export const SALESFORCE_INCIDENTS_INCIDENT_TEMPLATE =
  "salesforce-incidents-incident-template";
