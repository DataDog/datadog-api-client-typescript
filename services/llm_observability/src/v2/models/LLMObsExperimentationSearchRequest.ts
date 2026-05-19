import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationSearchDataRequest } from "./LLMObsExperimentationSearchDataRequest";

/**
 * Request to search across LLM Observability experimentation entities using cursor-based pagination.
 */
export class LLMObsExperimentationSearchRequest {
  /**
   * Data object for an experimentation search request.
   */
  "data": LLMObsExperimentationSearchDataRequest;
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
      type: "LLMObsExperimentationSearchDataRequest",
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
    return LLMObsExperimentationSearchRequest.attributeTypeMap;
  }

  public constructor() {}
}
