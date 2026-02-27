import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for deleting LLM Observability projects.
 */
export class LLMObsDeleteProjectsDataAttributesRequest {
  /**
   * List of project IDs to delete.
   */
  "projectIds": Array<string>;
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
    projectIds: {
      baseName: "project_ids",
      type: "Array<string>",
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
    return LLMObsDeleteProjectsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
