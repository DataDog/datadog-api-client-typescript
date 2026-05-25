import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiMemoryViolationResultDataType } from "./AiMemoryViolationResultDataType";
import { AiMemoryViolationResultRequestAttributes } from "./AiMemoryViolationResultRequestAttributes";

/**
 * Request data for creating an AI memory violation result.
 */
export class AiMemoryViolationResultRequestData {
  /**
   * Attributes for creating an AI memory violation result.
   */
  "attributes"?: AiMemoryViolationResultRequestAttributes;
  /**
   * The violation result identifier.
   */
  "id"?: string;
  /**
   * AI memory violation result resource type.
   */
  "type"?: AiMemoryViolationResultDataType;
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
      type: "AiMemoryViolationResultRequestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiMemoryViolationResultDataType",
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
    return AiMemoryViolationResultRequestData.attributeTypeMap;
  }

  public constructor() {}
}
