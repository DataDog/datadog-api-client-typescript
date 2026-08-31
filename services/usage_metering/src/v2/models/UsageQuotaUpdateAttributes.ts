import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes to update on a usage quota. Omitting a property leaves its current value unchanged.
 */
export class UsageQuotaUpdateAttributes {
  /**
   * Whether to actively block usage above the limit. Omit this field to leave the current enforcement setting unchanged.
   */
  "enforced"?: boolean;
  /**
   * The new quota limit in the usage units defined by the quota namespace. For an organization-wide quota (empty scope), the limit must be greater than the usage already recorded in the current period. Omit this field to leave the current limit unchanged.
   */
  "usageLimit"?: number;
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
    enforced: {
      baseName: "enforced",
      type: "boolean",
    },
    usageLimit: {
      baseName: "usage_limit",
      type: "number",
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
    return UsageQuotaUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
