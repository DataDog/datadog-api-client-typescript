import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination details.
 */
export class ExecutionPolicyListResponsePage {
  /**
   * The total number of execution policies matching the query.
   */
  "total": number;
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
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int32",
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
    return ExecutionPolicyListResponsePage.attributeTypeMap;
  }

  public constructor() {}
}
