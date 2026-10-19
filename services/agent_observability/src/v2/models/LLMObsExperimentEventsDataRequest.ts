import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentEventsDataAttributesRequest } from "./LLMObsExperimentEventsDataAttributesRequest";
import { LLMObsExperimentType } from "./LLMObsExperimentType";

/**
 * Data object for pushing experiment events.
 */
export class LLMObsExperimentEventsDataRequest {
  /**
   * Attributes for pushing experiment events including spans and metrics.
   */
  "attributes": LLMObsExperimentEventsDataAttributesRequest;
  /**
   * Resource type of an Agent Observability experiment.
   */
  "type": LLMObsExperimentType;
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
      type: "LLMObsExperimentEventsDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsExperimentType",
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
    return LLMObsExperimentEventsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
