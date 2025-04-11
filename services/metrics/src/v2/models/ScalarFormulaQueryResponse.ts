import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarResponse } from "./ScalarResponse";

/**
 * A message containing one or more responses to scalar queries.
 */
export class ScalarFormulaQueryResponse {
  /**
   * A message containing the response to a scalar query.
   */
  "data"?: ScalarResponse;
  /**
   * An error generated when processing a request.
   */
  "errors"?: string;
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
      type: "ScalarResponse",
    },
    errors: {
      baseName: "errors",
      type: "string",
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
    return ScalarFormulaQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
