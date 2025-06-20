import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The view of the world that the map should render.
 */
export class GeomapWidgetDefinitionView {
  /**
   * A custom extent of the map defined by an array of four numbers in the order `[minLongitude, minLatitude, maxLongitude, maxLatitude]`.
   */
  "customExtent"?: [number, number, number, number];
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
    customExtent: {
      baseName: "custom_extent",
      type: "[number, number, number, number]",
      format: "double",
    },
    focus: {
      baseName: "focus",
      type: "string",
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
    return GeomapWidgetDefinitionView.attributeTypeMap;
  }

  public constructor() {}
}
