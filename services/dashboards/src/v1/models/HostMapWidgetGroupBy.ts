import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines a grouping dimension for the infrastructure host map.
 */
export class HostMapWidgetGroupBy {
  /**
   * Column name from the entity table (for example, `cloud_provider`, `tags`, `labels`).
   */
  "column": string;
  /**
   * Key within the column for nested attribute types (for example, `service` within `tags`).
   */
  "key"?: string;
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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    key: {
      baseName: "key",
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
    return HostMapWidgetGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
