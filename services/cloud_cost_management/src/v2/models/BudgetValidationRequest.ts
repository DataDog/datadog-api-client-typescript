import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetValidationRequestData } from "./BudgetValidationRequestData";

/**
 * The request object for validating a budget configuration before creating or updating it.
 */
export class BudgetValidationRequest {
  /**
   * The data object for a budget validation request, containing the resource type, ID, and budget attributes to validate.
   */
  "data"?: BudgetValidationRequestData;
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
      type: "BudgetValidationRequestData",
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
    return BudgetValidationRequest.attributeTypeMap;
  }

  public constructor() {}
}
