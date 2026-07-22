import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipInferenceItem } from "./OwnershipInferenceItem";

/**
 * The attributes of the ownership inferences collection response.
 */
export class OwnershipInferenceListAttributes {
  /**
   * The list of inferences for a resource, with one inference per owner type.
   */
  "items": Array<OwnershipInferenceItem>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    items: {
      baseName: "items",
      type: "Array<OwnershipInferenceItem>",
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
    return OwnershipInferenceListAttributes.attributeTypeMap;
  }

  public constructor() {}
}
