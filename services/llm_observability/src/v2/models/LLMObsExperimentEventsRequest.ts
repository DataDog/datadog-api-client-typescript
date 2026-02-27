import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentEventsDataRequest } from "./LLMObsExperimentEventsDataRequest";

/**
 * Request to push spans and metrics for an LLM Observability experiment.
 */
export class LLMObsExperimentEventsRequest {
  /**
   * Data object for pushing experiment events.
   */
  "data": LLMObsExperimentEventsDataRequest;
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
      type: "LLMObsExperimentEventsDataRequest",
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
    return LLMObsExperimentEventsRequest.attributeTypeMap;
  }

  public constructor() {}
}
