import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarFormulaResponseAtrributes } from "./ScalarFormulaResponseAtrributes";
import { ScalarFormulaResponseType } from "./ScalarFormulaResponseType";

/**
 * A message containing the response to a scalar query.
 */
export class ScalarResponse {
  /**
   * The object describing a scalar response.
   */
  "attributes"?: ScalarFormulaResponseAtrributes;
  /**
   * The type of the resource. The value should always be scalar_response.
   */
  "type"?: ScalarFormulaResponseType;
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
      type: "ScalarFormulaResponseAtrributes",
    },
    type: {
      baseName: "type",
      type: "ScalarFormulaResponseType",
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
    return ScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
