import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationStrongLinkType } from "./RUMOperationStrongLinkType";
import { RUMOperationStrongLinkUpdateRequestAttributes } from "./RUMOperationStrongLinkUpdateRequestAttributes";

/**
 * The data object for updating a RUM operation strong link.
 */
export class RUMOperationStrongLinkUpdateRequestData {
  /**
   * Attributes for updating a RUM operation strong link.
   */
  "attributes": RUMOperationStrongLinkUpdateRequestAttributes;
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
      type: "RUMOperationStrongLinkUpdateRequestAttributes",
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
    return RUMOperationStrongLinkUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
