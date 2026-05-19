import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for grouping aggregated results by one or more case fields.
 */
export class CaseAggregateGroupBy {
  /**
   * Fields to group by.
   */
  "groups": Array<string>;
  /**
   * Maximum number of groups to return.
   */
  "limit": number;
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
    groups: {
      baseName: "groups",
      type: "Array<string>",
      required: true,
    },
    limit: {
      baseName: "limit",
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
    return CaseAggregateGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
