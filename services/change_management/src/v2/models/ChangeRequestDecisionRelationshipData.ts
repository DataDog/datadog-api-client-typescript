import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestDecisionResourceType } from "./ChangeRequestDecisionResourceType";

/**
 * Change request decision relationship data.
 */
export class ChangeRequestDecisionRelationshipData {
  /**
   * The decision UUID.
   */
  "id": string;
  /**
   * Change request decision resource type.
   */
  "type": ChangeRequestDecisionResourceType;
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
      type: "ChangeRequestDecisionResourceType",
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
    return ChangeRequestDecisionRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
