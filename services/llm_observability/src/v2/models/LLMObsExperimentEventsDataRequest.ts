import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsEventType } from "./LLMObsEventType";
import { LLMObsExperimentEventsDataAttributesRequest } from "./LLMObsExperimentEventsDataAttributesRequest";

/**
 * Data object for pushing experiment events.
 */
export class LLMObsExperimentEventsDataRequest {
  /**
   * Attributes for pushing experiment events including spans and metrics.
   */
  "attributes": LLMObsExperimentEventsDataAttributesRequest;
  /**
   * Resource type for LLM Observability experiment events.
   */
  "type": LLMObsEventType;
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
      type: "LLMObsEventType",
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
