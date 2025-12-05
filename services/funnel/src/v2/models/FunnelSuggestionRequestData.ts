import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelSuggestionRequestDataAttributes } from "./FunnelSuggestionRequestDataAttributes";
import { FunnelSuggestionRequestDataType } from "./FunnelSuggestionRequestDataType";

export class FunnelSuggestionRequestData {
  "attributes"?: FunnelSuggestionRequestDataAttributes;
  "id"?: string;
  "type": FunnelSuggestionRequestDataType;
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
      type: "FunnelSuggestionRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FunnelSuggestionRequestDataType",
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
    return FunnelSuggestionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
