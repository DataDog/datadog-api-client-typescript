/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an incident configuration in a response.
 */
export class IncidentConfigurationDataAttributesResponse {
  /**
   * Timestamp when the configuration was created.
   */
  "createdAt": Date;
  /**
   * Whether integrations are executed for this incident.
   */
  "executeIntegrations"?: boolean;
  /**
   * Whether notification rules are executed for this incident.
   */
  "executeNotificationRules"?: boolean;
  /**
   * The incident identifier.
   */
  "incidentId": string;
  /**
   * Whether this incident is included in analytics.
   */
  "includeInAnalytics"?: boolean;
  /**
   * Whether this incident is included in search results.
   */
  "includeInSearch"?: boolean;
  /**
   * Timestamp when the configuration was last modified.
   */
  "modifiedAt": Date;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    executeIntegrations: {
      baseName: "execute_integrations",
      type: "boolean",
    },
    executeNotificationRules: {
      baseName: "execute_notification_rules",
      type: "boolean",
    },
    incidentId: {
      baseName: "incident_id",
      type: "string",
      required: true,
    },
    includeInAnalytics: {
      baseName: "include_in_analytics",
      type: "boolean",
    },
    includeInSearch: {
      baseName: "include_in_search",
      type: "boolean",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentConfigurationDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
