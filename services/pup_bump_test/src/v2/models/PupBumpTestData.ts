import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PupBumpTestDataAttributes } from "./PupBumpTestDataAttributes";
import { PupBumpTestType } from "./PupBumpTestType";

/**
 * Pup bump test resource data.
 */
export class PupBumpTestData {
  /**
   * Attributes of the pup bump test resource.
   */
  "attributes": PupBumpTestDataAttributes;
  /**
   * Pup bump test identifier.
   */
  "id": string;
  /**
   * Pup bump test resource type.
   */
  "type": PupBumpTestType;
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
      type: "PupBumpTestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PupBumpTestType",
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
    return PupBumpTestData.attributeTypeMap;
  }

  public constructor() {}
}
