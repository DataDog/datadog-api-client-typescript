import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * User who shared the dashboard.
 */
export class SharedDashboardAuthor {
  /**
   * Identifier of the user who shared the dashboard.
   */
  "handle"?: string;
  /**
   * Name of the user who shared the dashboard.
   */
  "name"?: string;
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
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SharedDashboardAuthor.attributeTypeMap;
  }

  public constructor() {}
}
