import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomAttributeConfigResourceType } from "./CustomAttributeConfigResourceType";
import { CustomAttributeConfigUpdateAttributes } from "./CustomAttributeConfigUpdateAttributes";

/**
 * Data object for updating a custom attribute configuration.
 */
export class CustomAttributeConfigUpdate {
  /**
   * Attributes that can be updated on a custom attribute configuration. All fields are optional; only provided fields are changed.
   */
  "attributes"?: CustomAttributeConfigUpdateAttributes;
  /**
   * JSON:API resource type for custom attribute configurations.
   */
  "type": CustomAttributeConfigResourceType;
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
      type: "CustomAttributeConfigUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "CustomAttributeConfigResourceType",
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
    return CustomAttributeConfigUpdate.attributeTypeMap;
  }

  public constructor() {}
}
