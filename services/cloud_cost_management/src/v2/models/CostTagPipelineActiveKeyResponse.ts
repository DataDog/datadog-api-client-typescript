import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostTagPipelineActiveKeyData } from "./CostTagPipelineActiveKeyData";

/**
 * List of tag keys actively set by tag pipeline rules.
 */
export class CostTagPipelineActiveKeyResponse {
  /**
   * List of active tag keys.
   */
  "data": Array<CostTagPipelineActiveKeyData>;
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
    data: {
      baseName: "data",
      type: "Array<CostTagPipelineActiveKeyData>",
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
    return CostTagPipelineActiveKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
