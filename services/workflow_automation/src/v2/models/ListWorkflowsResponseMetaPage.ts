import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Page information for the list workflows response.
 */
export class ListWorkflowsResponseMetaPage {
  /**
   * The total number of workflows.
   */
  "totalCount"?: number;
  /**
   * The total number of workflows matching the applied filters.
   */
  "totalFilteredCount"?: number;
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
    totalCount: {
      baseName: "totalCount",
      type: "number",
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "totalFilteredCount",
      type: "number",
      format: "int64",
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
    return ListWorkflowsResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
