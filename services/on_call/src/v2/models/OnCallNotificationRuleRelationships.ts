import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallNotificationRuleChannelRelationship } from "./OnCallNotificationRuleChannelRelationship";

/**
 * Relationship object for creating a notification rule
 */
export class OnCallNotificationRuleRelationships {
  /**
   * Relationship object for creating a notification rule
   */
  "channel"?: OnCallNotificationRuleChannelRelationship;
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
    channel: {
      baseName: "channel",
      type: "OnCallNotificationRuleChannelRelationship",
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
    return OnCallNotificationRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
