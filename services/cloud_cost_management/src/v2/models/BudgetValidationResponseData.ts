import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetValidationResponseDataAttributes } from "./BudgetValidationResponseDataAttributes";
import { BudgetValidationResponseDataType } from "./BudgetValidationResponseDataType";

export class BudgetValidationResponseData {
  "attributes"?: BudgetValidationResponseDataAttributes;
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
