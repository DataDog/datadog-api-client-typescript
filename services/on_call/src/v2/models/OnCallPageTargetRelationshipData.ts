import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageTargetRelationshipDataType } from "./OnCallPageTargetRelationshipDataType";

/**
 * Reference to the target of the page.
 */
export class OnCallPageTargetRelationshipData {
  /**
   * The ID of the target.
   */
  "id": string;
  /**
   * The resource type of the page target.
   */
  "type": OnCallPageTargetRelationshipDataType;
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
      type: "OnCallPageTargetRelationshipDataType",
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
    return OnCallPageTargetRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
