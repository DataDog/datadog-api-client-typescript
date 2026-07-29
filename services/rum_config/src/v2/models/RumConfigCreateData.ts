import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumConfigCreateAttributes } from "./RumConfigCreateAttributes";
import { RumConfigType } from "./RumConfigType";

/**
 * Object describing the RUM configuration to create.
 */
export class RumConfigCreateData {
  /**
   * Attributes of the RUM configuration to create.
   */
  "attributes": RumConfigCreateAttributes;
  /**
   * The type of the resource. The value should always be `rum_config`.
   */
  "type": RumConfigType;
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
      type: "RumConfigCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumConfigType",
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
    return RumConfigCreateData.attributeTypeMap;
  }

  public constructor() {}
}
