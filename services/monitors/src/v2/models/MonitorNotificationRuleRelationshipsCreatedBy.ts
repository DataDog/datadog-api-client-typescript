import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleRelationshipsCreatedByData } from "./MonitorNotificationRuleRelationshipsCreatedByData";

/**
 * The user who created the monitor notification rule.
 */
export class MonitorNotificationRuleRelationshipsCreatedBy {
  /**
   * Data for the user who created the monitor notification rule.
   */
  "data"?: MonitorNotificationRuleRelationshipsCreatedByData;
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
    data: {
      baseName: "data",
      type: "MonitorNotificationRuleRelationshipsCreatedByData",
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
    return MonitorNotificationRuleRelationshipsCreatedBy.attributeTypeMap;
  }

  public constructor() {}
}
