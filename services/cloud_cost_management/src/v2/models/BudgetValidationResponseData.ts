import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetValidationResponseDataAttributes } from "./BudgetValidationResponseDataAttributes";
import { BudgetValidationResponseDataType } from "./BudgetValidationResponseDataType";

/**
 * The data object for a budget validation response, containing the resource type, ID, and validation attributes.
 */
export class BudgetValidationResponseData {
  /**
   * The attributes of a budget validation response, including any validation errors and the validity status.
   */
  "attributes"?: BudgetValidationResponseDataAttributes;
  /**
   * The unique identifier of the budget being validated.
   */
  "id"?: string;
  /**
   * Budget validation resource type.
   */
  "type": BudgetValidationResponseDataType;
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
      type: "BudgetValidationResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "BudgetValidationResponseDataType",
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
    return BudgetValidationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
