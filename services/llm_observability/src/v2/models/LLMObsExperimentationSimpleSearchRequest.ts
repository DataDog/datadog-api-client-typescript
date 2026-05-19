import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationSimpleSearchDataRequest } from "./LLMObsExperimentationSimpleSearchDataRequest";

/**
 * Request to search across LLM Observability experimentation entities using offset-based pagination.
 */
export class LLMObsExperimentationSimpleSearchRequest {
  /**
   * Data object for an experimentation simple search request.
   */
  "data": LLMObsExperimentationSimpleSearchDataRequest;
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
      type: "LLMObsExperimentationSimpleSearchDataRequest",
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
    return LLMObsExperimentationSimpleSearchRequest.attributeTypeMap;
  }

  public constructor() {}
}
