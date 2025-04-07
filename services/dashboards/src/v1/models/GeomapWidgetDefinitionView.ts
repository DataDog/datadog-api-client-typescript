import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The view of the world that the map should render.
 */
export class GeomapWidgetDefinitionView {
  /**
   * The 2-letter ISO code of a country to focus the map on. Or `WORLD`.
   */
  "focus": string;
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
    focus: {
      baseName: "focus",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapWidgetDefinitionView.attributeTypeMap;
  }

  public constructor() {}
}
