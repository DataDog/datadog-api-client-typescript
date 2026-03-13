import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Dashboard tab for organizing widgets.
 */
export class DashboardTab {
  /**
   * UUID of the tab.
   */
  "id": string;
  /**
   * Name of the tab.
   */
  "name": string;
  /**
   * List of widget IDs belonging to this tab. The backend also accepts positional references in @N format (1-indexed) as a convenience for Terraform and other declarative tools.
   */
  "widgetIds": Array<number>;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    widgetIds: {
      baseName: "widget_ids",
      type: "Array<number>",
      required: true,
      format: "int64",
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
    return DashboardTab.attributeTypeMap;
  }

  public constructor() {}
}
