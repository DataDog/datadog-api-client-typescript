import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetWithEntriesDataAttributes } from "./BudgetWithEntriesDataAttributes";
import { BudgetWithEntriesDataType } from "./BudgetWithEntriesDataType";

export class BudgetValidationRequestData {
  "attributes"?: BudgetWithEntriesDataAttributes;
  "id"?: string;
  /**
   * Budget resource type.
   */
  "type": BudgetWithEntriesDataType;
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
      type: "BudgetWithEntriesDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "BudgetWithEntriesDataType",
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
    return BudgetValidationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
