import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageScheduledActionType } from "./OnCallPageScheduledActionType";

/**
 * Reference to the next scheduled action on the page.
 */
export class OnCallPageScheduledActionRelationshipData {
  /**
   * The ID of the scheduled action. Equal to the page ID.
   */
  "id": string;
  /**
   * Scheduled action resource type.
   */
  "type": OnCallPageScheduledActionType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnCallPageScheduledActionType",
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
    return OnCallPageScheduledActionRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
