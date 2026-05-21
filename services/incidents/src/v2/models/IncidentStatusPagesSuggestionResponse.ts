import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatusPagesSuggestionData } from "./IncidentStatusPagesSuggestionData";

/**
 * Response with a status pages suggestion.
 */
export class IncidentStatusPagesSuggestionResponse {
  /**
   * Status pages suggestion data.
   */
  "data": IncidentStatusPagesSuggestionData;
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
      type: "IncidentStatusPagesSuggestionData",
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
    return IncidentStatusPagesSuggestionResponse.attributeTypeMap;
  }

  public constructor() {}
}
