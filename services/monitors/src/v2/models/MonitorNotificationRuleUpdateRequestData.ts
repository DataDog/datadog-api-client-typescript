import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleAttributes } from "./MonitorNotificationRuleAttributes";
import { MonitorNotificationRuleResourceType } from "./MonitorNotificationRuleResourceType";

/**
 * Object to update a monitor notification rule.
 */
export class MonitorNotificationRuleUpdateRequestData {
  /**
   * Attributes of the monitor notification rule.
   */
  "attributes": MonitorNotificationRuleAttributes;
  /**
   * The ID of the monitor notification rule.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
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
    return MonitorNotificationRuleUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
