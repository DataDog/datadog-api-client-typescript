import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WildcardWidgetSpecificationType } from "./WildcardWidgetSpecificationType";

/**
 * Vega or Vega-Lite specification for custom visualization rendering. See https://vega.github.io/vega-lite/ for the full grammar reference.
 */
export class WildcardWidgetSpecification {
  /**
   * The Vega or Vega-Lite JSON specification object.
   */
  "contents": any;
  /**
   * Type of specification used by the wildcard widget.
   */
  "type": WildcardWidgetSpecificationType;
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
    contents: {
      baseName: "contents",
      type: "any",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WildcardWidgetSpecificationType",
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
    return WildcardWidgetSpecification.attributeTypeMap;
  }

  public constructor() {}
}
