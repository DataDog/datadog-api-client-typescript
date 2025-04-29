import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomFrameworkType } from "./CustomFrameworkType";
import { CustomFrameworkWithoutRequirements } from "./CustomFrameworkWithoutRequirements";

/**
 * Metadata for custom frameworks.
 */
export class CustomFrameworkMetadata {
  /**
   * Framework without requirements.
   */
  "attributes"?: CustomFrameworkWithoutRequirements;
  /**
   * The ID of the custom framework.
   */
  "id"?: string;
  /**
   * The type of the resource. The value must be `custom_framework`.
   */
  "type"?: CustomFrameworkType;
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
      type: "CustomFrameworkWithoutRequirements",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomFrameworkType",
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
    return CustomFrameworkMetadata.attributeTypeMap;
  }

  public constructor() {}
}
