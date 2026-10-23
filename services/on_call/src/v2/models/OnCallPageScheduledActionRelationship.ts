import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageScheduledActionRelationshipData } from "./OnCallPageScheduledActionRelationshipData";

/**
 * The next action scheduled on the page, such as an escalation.
 */
export class OnCallPageScheduledActionRelationship {
  /**
   * Reference to the next scheduled action on the page.
   */
  "data"?: OnCallPageScheduledActionRelationshipData;
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
      type: "OnCallPageScheduledActionRelationshipData",
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
    return OnCallPageScheduledActionRelationship.attributeTypeMap;
  }

  public constructor() {}
}
