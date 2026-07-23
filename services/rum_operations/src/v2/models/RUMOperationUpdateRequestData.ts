import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationRequestAttributes } from "./RUMOperationRequestAttributes";
import { RUMOperationType } from "./RUMOperationType";

/**
 * The data object for updating a RUM operation.
 */
export class RUMOperationUpdateRequestData {
  /**
   * Attributes for creating or updating a RUM operation.
   */
  "attributes": RUMOperationRequestAttributes;
  /**
   * The unique identifier of the RUM operation. Must match the ID in the URL path.
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
      type: "RUMOperationRequestAttributes",
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
    return RUMOperationUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
