import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Archive configuration.
 */
export class RumArchiveConfigAttributes {
  /**
   * Whether archiving is enabled.
   */
  "enabled": boolean;
  /**
   * Organization ID.
   */
  "orgId": number;
  /**
   * Configured retention in days; omitted when unset. When archiving is enabled, this is 30, 90, or 180.
   */
  "retentionDays"?: number;
  /**
   * Last update time.
   */
  "updatedAt"?: Date;
  /**
   * Handle of the user who last updated the configuration.
   */
  "updatedBy"?: string;
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
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    retentionDays: {
      baseName: "retention_days",
      type: "number",
      format: "int32",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
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
    return RumArchiveConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
