import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAIPostmortemDataResponse } from "./IncidentAIPostmortemDataResponse";

/**
 * Response with an AI-generated incident postmortem.
 */
export class IncidentAIPostmortemResponse {
  /**
   * AI postmortem data in a response.
   */
  "data": IncidentAIPostmortemDataResponse;
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
      type: "IncidentAIPostmortemDataResponse",
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
    return IncidentAIPostmortemResponse.attributeTypeMap;
  }

  public constructor() {}
}
