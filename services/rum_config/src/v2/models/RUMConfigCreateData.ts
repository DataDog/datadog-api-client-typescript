import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMConfigCreateAttributes } from "./RUMConfigCreateAttributes";
import { RUMConfigType } from "./RUMConfigType";

/**
 * Object describing the RUM configuration to create.
 */
export class RUMConfigCreateData {
  /**
   * Attributes of the RUM configuration to create.
   */
  "attributes": RUMConfigCreateAttributes;
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
      type: "RUMConfigCreateAttributes",
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
    return RUMConfigCreateData.attributeTypeMap;
  }

  public constructor() {}
}
