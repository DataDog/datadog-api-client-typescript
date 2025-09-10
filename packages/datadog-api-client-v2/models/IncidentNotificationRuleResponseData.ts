/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationRuleAttributes } from "./IncidentNotificationRuleAttributes";
import { IncidentNotificationRuleRelationships } from "./IncidentNotificationRuleRelationships";
import { IncidentNotificationRuleType } from "./IncidentNotificationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notification rule data from a response.
 */
export class IncidentNotificationRuleResponseData {
  /**
   * The notification rule's attributes.
   */
  "attributes"?: IncidentNotificationRuleAttributes;
  /**
   * The unique identifier of the notification rule.
   */
  "id": string;
  /**
   * The notification rule's resource relationships.
   */
  "relationships"?: IncidentNotificationRuleRelationships;
  /**
   * Notification rules resource type.
   */
  "type": IncidentNotificationRuleType;

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
    attributes: {
      baseName: "attributes",
      type: "IncidentNotificationRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentNotificationRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentNotificationRuleType",
      required: true,
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
    return IncidentNotificationRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
