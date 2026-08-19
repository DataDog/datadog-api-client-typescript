import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about the exclusion filter.
 */
export class RumExclusionFilterMeta {
  /**
   * Unix epoch (in milliseconds) when the exclusion filter was last enabled.
   */
  "enabledAt"?: number;
  /**
   * Unix epoch (in milliseconds) of the last update.
   */
  "updatedAt"?: number;
  /**
   * Handle of the user who last updated the exclusion filter.
   */
  "updatedByHandle"?: string;
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
    enabledAt: {
      baseName: "enabled_at",
      type: "number",
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "number",
      format: "int64",
    },
    updatedByHandle: {
      baseName: "updated_by_handle",
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
    return RumExclusionFilterMeta.attributeTypeMap;
  }

  public constructor() {}
}
