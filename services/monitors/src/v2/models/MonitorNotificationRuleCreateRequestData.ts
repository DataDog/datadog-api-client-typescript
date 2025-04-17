import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleAttributes } from "./MonitorNotificationRuleAttributes";
import { MonitorNotificationRuleResourceType } from "./MonitorNotificationRuleResourceType";

/**
 * Object to create a monitor notification rule.
 */
export class MonitorNotificationRuleCreateRequestData {
  /**
   * Attributes of the monitor notification rule.
   */
  "attributes": MonitorNotificationRuleAttributes;
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
      type: "MonitorNotificationRuleAttributes",
      required: true,
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
    return MonitorNotificationRuleCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
