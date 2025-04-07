import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarFormulaRequestAttributes } from "./ScalarFormulaRequestAttributes";
import { ScalarFormulaRequestType } from "./ScalarFormulaRequestType";

/**
 * A single scalar query to be executed.
 */
export class ScalarFormulaRequest {
  /**
   * The object describing a scalar formula request.
   */
  "attributes": ScalarFormulaRequestAttributes;
  /**
   * The type of the resource. The value should always be scalar_request.
   */
  "type": ScalarFormulaRequestType;
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
      type: "ScalarFormulaRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ScalarFormulaRequestType",
      required: true,
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
    return ScalarFormulaRequest.attributeTypeMap;
  }

  public constructor() {}
}
