import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationCreateAttributes } from "./RUMApplicationCreateAttributes";
import { RUMApplicationCreateType } from "./RUMApplicationCreateType";

/**
 * RUM application creation.
 */
export class RUMApplicationCreate {
  /**
   * RUM application creation attributes.
   */
  "attributes": RUMApplicationCreateAttributes;
  /**
   * RUM application creation type.
   */
  "type": RUMApplicationCreateType;
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
      type: "RUMApplicationCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationCreateType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMApplicationCreate.attributeTypeMap;
  }

  public constructor() {}
}
