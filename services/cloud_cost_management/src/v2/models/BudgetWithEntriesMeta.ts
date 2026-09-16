import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Additional information about errors encountered while retrieving budget cost data.
 */
export class BudgetWithEntriesMeta {
  /**
   * A user-facing explanation of why budget cost data could not be retrieved.
   */
  "error": string;
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
    error: {
      baseName: "error",
      type: "string",
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
    return BudgetWithEntriesMeta.attributeTypeMap;
  }

  public constructor() {}
}
