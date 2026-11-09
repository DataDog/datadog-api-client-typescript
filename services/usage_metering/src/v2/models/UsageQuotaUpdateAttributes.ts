import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes to update on a usage quota. At least one of `usage_limit`, `enforced`, or `pending_usage_limit` must be provided. Omitting a property leaves its current value unchanged.
 */
export class UsageQuotaUpdateAttributes {
  /**
   * Whether to actively block usage above the limit. Omit this field to leave the current enforcement setting unchanged.
   */
  "enforced"?: boolean;
  /**
   * The limit to apply to the organization-wide quota at 00:00 UTC on the first day of the next calendar month. Must be a non-negative integer in the usage units defined by the quota namespace. This value is not checked against current usage.
   *
   * Setting this field replaces any previously scheduled limit. The server sets `pending_effective_from`.
   *
   * Omitting this field preserves the scheduled change, even when increasing `usage_limit`. Setting `enforced=false` clears the scheduled change. To cancel it explicitly, use `DELETE /api/v2/usage/quotas/{quota_namespace}/{id}/pending`.
   */
  "pendingUsageLimit"?: number;
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
    pendingUsageLimit: {
      baseName: "pending_usage_limit",
      type: "number",
      format: "int64",
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
