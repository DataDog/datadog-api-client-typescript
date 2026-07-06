import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A group-by facet for an available values query.
 */
export class NotebookTemplateVariableAvailableValuesQueryGroupBy {
  /**
   * The facet name to group by.
   */
  "facet": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookTemplateVariableAvailableValuesQueryGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
