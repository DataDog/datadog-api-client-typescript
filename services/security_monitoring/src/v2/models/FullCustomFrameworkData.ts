import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomFrameworkType } from "./CustomFrameworkType";
import { FullCustomFrameworkDataAttributes } from "./FullCustomFrameworkDataAttributes";

/**
 * Contains type and attributes for custom frameworks.
 */
export class FullCustomFrameworkData {
  /**
   * Full Framework Data Attributes.
   */
  "attributes": FullCustomFrameworkDataAttributes;
  /**
   * The ID of the custom framework.
   */
  "id": string;
  /**
   * The type of the resource. The value must be `custom_framework`.
   */
  "type": CustomFrameworkType;
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
      type: "FullCustomFrameworkDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomFrameworkType",
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
    return FullCustomFrameworkData.attributeTypeMap;
  }

  public constructor() {}
}
