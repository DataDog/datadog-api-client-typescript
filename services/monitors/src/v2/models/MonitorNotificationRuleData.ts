import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleRelationships } from "./MonitorNotificationRuleRelationships";
import { MonitorNotificationRuleResourceType } from "./MonitorNotificationRuleResourceType";
import { MonitorNotificationRuleResponseAttributes } from "./MonitorNotificationRuleResponseAttributes";

/**
 * Monitor notification rule data.
 */
export class MonitorNotificationRuleData {
  /**
   * Attributes of the monitor notification rule.
   */
  "attributes"?: MonitorNotificationRuleResponseAttributes;
  /**
   * The ID of the monitor notification rule.
   */
  "id"?: string;
  /**
   * All relationships associated with monitor notification rule.
   */
  "relationships"?: MonitorNotificationRuleRelationships;
  /**
   * Monitor notification rule resource type.
   */
  "type"?: MonitorNotificationRuleResourceType;
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
      type: "MonitorNotificationRuleResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "MonitorNotificationRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "MonitorNotificationRuleResourceType",
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
    return MonitorNotificationRuleData.attributeTypeMap;
  }

  public constructor() {}
}
