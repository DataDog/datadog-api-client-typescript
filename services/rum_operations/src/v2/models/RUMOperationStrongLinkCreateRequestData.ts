import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationStrongLinkCreateRequestAttributes } from "./RUMOperationStrongLinkCreateRequestAttributes";
import { RUMOperationStrongLinkType } from "./RUMOperationStrongLinkType";

/**
 * The data object for creating a RUM operation strong link.
 */
export class RUMOperationStrongLinkCreateRequestData {
  /**
   * Attributes for creating a RUM operation strong link.
   */
  "attributes": RUMOperationStrongLinkCreateRequestAttributes;
  /**
   * The JSON:API type for RUM operation strong link resources.
   */
  "type": RUMOperationStrongLinkType;
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
      type: "RUMOperationStrongLinkCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMOperationStrongLinkType",
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
    return RUMOperationStrongLinkCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
