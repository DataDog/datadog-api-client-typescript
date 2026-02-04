import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Dashboard search result attributes.
 */
export class DashboardSearchAttributes {
  /**
   * List of tags for the dashboard.
   */
  "tags": Array<string>;
  /**
   * Title of the dashboard.
   */
  "title": string;
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
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    title: {
      baseName: "title",
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
    return DashboardSearchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
