import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelSuggestionRequestData } from "./FunnelSuggestionRequestData";

export class FunnelSuggestionRequest {
  "data"?: FunnelSuggestionRequestData;
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
      type: "FunnelSuggestionRequestData",
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
    return FunnelSuggestionRequest.attributeTypeMap;
  }

  public constructor() {}
}
