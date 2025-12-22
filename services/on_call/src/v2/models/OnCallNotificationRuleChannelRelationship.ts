import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallNotificationRuleChannelRelationshipData } from "./OnCallNotificationRuleChannelRelationshipData";

/**
 * Relationship object for creating a notification rule
 */
export class OnCallNotificationRuleChannelRelationship {
  /**
   * Channel relationship data for creating a notification rule
   */
  "data": OnCallNotificationRuleChannelRelationshipData;
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
      type: "OnCallNotificationRuleChannelRelationshipData",
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
    return OnCallNotificationRuleChannelRelationship.attributeTypeMap;
  }

  public constructor() {}
}
