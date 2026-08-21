import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationAnalyticsDataAttributesRequest } from "./LLMObsExperimentationAnalyticsDataAttributesRequest";
import { LLMObsExperimentationType } from "./LLMObsExperimentationType";

/**
 * Data object for an analytics request.
 */
export class LLMObsExperimentationAnalyticsDataRequest {
  /**
   * Attributes for an analytics request.
   */
  "attributes": LLMObsExperimentationAnalyticsDataAttributesRequest;
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
      type: "LLMObsExperimentationAnalyticsDataAttributesRequest",
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
    return LLMObsExperimentationAnalyticsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
