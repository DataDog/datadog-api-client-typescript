/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an incident configuration.
 */
export class IncidentConfigurationDataAttributesRequest {
  /**
   * Whether to execute integrations for this incident.
   */
  "executeIntegrations"?: boolean;
  /**
   * Whether to execute notification rules for this incident.
   */
  "executeNotificationRules"?: boolean;
  /**
   * Whether to include this incident in analytics.
   */
  "includeInAnalytics"?: boolean;
  /**
   * Whether to include this incident in search results.
   */
  "includeInSearch"?: boolean;

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
    executeIntegrations: {
      baseName: "execute_integrations",
      type: "boolean",
    },
    executeNotificationRules: {
      baseName: "execute_notification_rules",
      type: "boolean",
    },
    includeInAnalytics: {
      baseName: "include_in_analytics",
      type: "boolean",
    },
    includeInSearch: {
      baseName: "include_in_search",
      type: "boolean",
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
    return IncidentConfigurationDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
