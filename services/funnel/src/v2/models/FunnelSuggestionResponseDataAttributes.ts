import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelSuggestionResponseDataAttributesActionsItems } from "./FunnelSuggestionResponseDataAttributesActionsItems";
import { FunnelSuggestionResponseDataAttributesViewsItems } from "./FunnelSuggestionResponseDataAttributesViewsItems";

export class FunnelSuggestionResponseDataAttributes {
  "actions"?: Array<FunnelSuggestionResponseDataAttributesActionsItems>;
  "views"?: Array<FunnelSuggestionResponseDataAttributesViewsItems>;
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
    actions: {
      baseName: "actions",
      type: "Array<FunnelSuggestionResponseDataAttributesActionsItems>",
    },
    views: {
      baseName: "views",
      type: "Array<FunnelSuggestionResponseDataAttributesViewsItems>",
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
    return FunnelSuggestionResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
