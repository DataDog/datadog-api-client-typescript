import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookTemplateVariableAvailableValuesQuery } from "./NotebookTemplateVariableAvailableValuesQuery";

/**
 * Notebook template variable.
 */
export class NotebookTemplateVariable {
  /**
   * The list of values that the template variable drop-down is limited to.
   */
  "availableValues"?: Array<string>;
  /**
   * Query used to dynamically populate the list of available values for the template variable.
   */
  "availableValuesQuery"?: NotebookTemplateVariableAvailableValuesQuery;
  /**
   * Mapping of data source names to template variable values.
   */
  "dataSourceMappings"?: { [key: string]: string; };
  /**
   * (deprecated) The default value for the template variable on notebook load.
   * Cannot be used in conjunction with `defaults`.
   */
  "_default"?: string;
  /**
   * One or many default values for the template variable. Cannot be used in conjunction with `default`.
   */
  "defaults"?: Array<string>;
  /**
   * The name of the variable.
   */
  "name": string;
  /**
   * The placement of the template variable in the notebook.
   */
  "placement"?: string;
  /**
   * The tag prefix associated with the variable. Only tags with this prefix appear in the variable drop-down.
   */
  "prefix"?: string;
  /**
   * The type of the template variable.
   */
  "type"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    availableValues: {
      baseName: "available_values",
      type: "Array<string>",
    },
    availableValuesQuery: {
      baseName: "available_values_query",
      type: "NotebookTemplateVariableAvailableValuesQuery",
    },
    dataSourceMappings: {
      baseName: "data_source_mappings",
      type: "{ [key: string]: string; }",
    },
    _default: {
      baseName: "default",
      type: "string",
    },
    defaults: {
      baseName: "defaults",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    placement: {
      baseName: "placement",
      type: "string",
    },
    prefix: {
      baseName: "prefix",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookTemplateVariable.attributeTypeMap;
  }

  public constructor() {}
}
