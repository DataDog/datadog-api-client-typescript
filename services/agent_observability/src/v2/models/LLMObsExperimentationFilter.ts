import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter criteria for an experimentation search request.
 */
export class LLMObsExperimentationFilter {
  /**
   * When `true`, include soft-deleted entities alongside active ones.
   */
  "includeDeleted"?: boolean;
  /**
   * When `true`, return only soft-deleted entities.
   */
  "isDeleted"?: boolean;
  /**
   * Free-text search query.
   */
  "query"?: string;
  /**
   * Entity types to search. Valid values are `projects`, `datasets`, `dataset_records`, `experiments`, and `experiment_runs`.
   */
  "scope": Array<string>;
  /**
   * Filter dataset records by a specific dataset version.
   */
  "version"?: number;
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
    includeDeleted: {
      baseName: "include_deleted",
      type: "boolean",
    },
    isDeleted: {
      baseName: "is_deleted",
      type: "boolean",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    scope: {
      baseName: "scope",
      type: "Array<string>",
      required: true,
    },
    version: {
      baseName: "version",
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
    return LLMObsExperimentationFilter.attributeTypeMap;
  }

  public constructor() {}
}
