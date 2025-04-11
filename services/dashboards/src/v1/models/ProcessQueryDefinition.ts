import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The process query to use in the widget.
 */
export class ProcessQueryDefinition {
  /**
   * List of processes.
   */
  "filterBy"?: Array<string>;
  /**
   * Max number of items in the filter list.
   */
  "limit"?: number;
  /**
   * Your chosen metric.
   */
  "metric": string;
  /**
   * Your chosen search term.
   */
  "searchBy"?: string;
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
    filterBy: {
      baseName: "filter_by",
      type: "Array<string>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    searchBy: {
      baseName: "search_by",
      type: "string",
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
    return ProcessQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
