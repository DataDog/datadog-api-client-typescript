import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Archive configuration to save. When enabled is true, retention_days is required and must be 30, 90, or 180. When disabled, retention_days can be omitted.
 */
export class RumArchiveConfigUpsertAttributes {
  /**
   * Whether archiving is enabled.
   */
  "enabled": boolean;
  /**
   * Retention in days. When enabled is true, required and restricted to 30, 90, or 180. When enabled is false, this field can be omitted.
   */
  "retentionDays"?: number;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    retentionDays: {
      baseName: "retention_days",
      type: "number",
      format: "int32",
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
    return RumArchiveConfigUpsertAttributes.attributeTypeMap;
  }

  public constructor() {}
}
