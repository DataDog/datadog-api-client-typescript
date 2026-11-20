import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMConfigType } from "./RUMConfigType";
import { RUMConfigUpdateAttributes } from "./RUMConfigUpdateAttributes";

/**
 * Object describing the RUM configuration to update.
 */
export class RUMConfigUpdateData {
  /**
   * Attributes of the RUM configuration to update.
   */
  "attributes": RUMConfigUpdateAttributes;
  /**
   * The type of the resource. The value should always be `rum_config`.
   */
  "type": RUMConfigType;
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
      type: "RUMConfigUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMConfigType",
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
    return RUMConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
