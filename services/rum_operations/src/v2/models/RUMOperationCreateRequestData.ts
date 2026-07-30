import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationRequestAttributes } from "./RUMOperationRequestAttributes";
import { RUMOperationType } from "./RUMOperationType";

/**
 * The data object for creating a RUM operation.
 */
export class RUMOperationCreateRequestData {
  /**
   * Attributes for creating or updating a RUM operation.
   */
  "attributes": RUMOperationRequestAttributes;
  /**
   * The JSON:API type for RUM operation resources.
   */
  "type": RUMOperationType;
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
      type: "RUMOperationRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMOperationType",
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
    return RUMOperationCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
