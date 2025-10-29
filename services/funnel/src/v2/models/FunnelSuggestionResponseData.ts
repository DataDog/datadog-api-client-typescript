import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelSuggestionResponseDataAttributes } from "./FunnelSuggestionResponseDataAttributes";
import { FunnelSuggestionResponseDataType } from "./FunnelSuggestionResponseDataType";

export class FunnelSuggestionResponseData {
  "attributes"?: FunnelSuggestionResponseDataAttributes;
  "id"?: string;
  "type": FunnelSuggestionResponseDataType;
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
      type: "FunnelSuggestionResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FunnelSuggestionResponseDataType",
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
    return FunnelSuggestionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
