import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleRelationshipsCreatedBy } from "./MonitorNotificationRuleRelationshipsCreatedBy";

/**
 * All relationships associated with monitor notification rule.
 */
export class MonitorNotificationRuleRelationships {
  /**
   * The user who created the monitor notification rule.
   */
  "createdBy"?: MonitorNotificationRuleRelationshipsCreatedBy;
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
    createdBy: {
      baseName: "created_by",
      type: "MonitorNotificationRuleRelationshipsCreatedBy",
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
    return MonitorNotificationRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
