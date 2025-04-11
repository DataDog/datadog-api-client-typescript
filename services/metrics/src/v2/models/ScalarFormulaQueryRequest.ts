import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarFormulaRequest } from "./ScalarFormulaRequest";

/**
 * A wrapper request around one scalar query to be executed.
 */
export class ScalarFormulaQueryRequest {
  /**
   * A single scalar query to be executed.
   */
  "data": ScalarFormulaRequest;
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
      type: "ScalarFormulaRequest",
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
    return ScalarFormulaQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
