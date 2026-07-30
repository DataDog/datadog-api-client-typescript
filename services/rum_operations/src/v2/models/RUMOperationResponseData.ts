import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationResponseAttributes } from "./RUMOperationResponseAttributes";
import { RUMOperationType } from "./RUMOperationType";

/**
 * The data object in a RUM operation response.
 */
export class RUMOperationResponseData {
  /**
   * Attributes of a RUM operation response.
   */
  "attributes": RUMOperationResponseAttributes;
  /**
   * The unique identifier of the RUM operation.
   */
  "id": string;
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
      type: "RUMOperationResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return RUMOperationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
