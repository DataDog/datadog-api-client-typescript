import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationSearchDataAttributesRequest } from "./LLMObsExperimentationSearchDataAttributesRequest";
import { LLMObsExperimentationType } from "./LLMObsExperimentationType";

/**
 * Data object for an experimentation search request.
 */
export class LLMObsExperimentationSearchDataRequest {
  /**
   * Attributes for an experimentation search request.
   */
  "attributes": LLMObsExperimentationSearchDataAttributesRequest;
  /**
   * Resource type for experimentation search and analytics operations.
   */
  "type": LLMObsExperimentationType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsExperimentationSearchDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsExperimentationType",
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
    return LLMObsExperimentationSearchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
