import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteProjectsDataRequest } from "./LLMObsDeleteProjectsDataRequest";

/**
 * Request to delete one or more LLM Observability projects.
 */
export class LLMObsDeleteProjectsRequest {
  /**
   * Data object for deleting LLM Observability projects.
   */
  "data": LLMObsDeleteProjectsDataRequest;
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
    data: {
      baseName: "data",
      type: "LLMObsDeleteProjectsDataRequest",
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
    return LLMObsDeleteProjectsRequest.attributeTypeMap;
  }

  public constructor() {}
}
