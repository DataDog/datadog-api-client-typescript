import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a usage quota bulk write result. On success, quota fields are present as applicable, and pending fields are present only when a change is scheduled. On failure, only `error` is present and the other fields are omitted.
 */
export class UsageQuotaBulkResultAttributes {
  /**
   * Whether usage above the limit is actively blocked instead of only tracked or alerted on. Omitted if this item failed to write.
   */
  "enforced"?: boolean;
  /**
   * An error message describing why this item failed to write. Omitted if this item was written successfully.
   */
  "error"?: string;
  /**
   * The public ID of the organization that owns the quota. Omitted if this item failed to write.
   */
  "orgPublicId"?: string;
  /**
   * The future UTC month when the scheduled limit takes effect, formatted as `YYYY-MM`, starting at 00:00 UTC on its first day. Present only together with `pending_usage_limit` and omitted when no change is scheduled or this item failed to write.
   */
  "pendingEffectiveFrom"?: string;
  /**
   * The usage limit scheduled for the organization-wide quota in the usage units defined by the quota namespace. A value of `0` is valid. At the start of the effective month, this value becomes `usage_limit` and both pending fields are omitted. Omitted when no change is scheduled or this item failed to write.
   */
  "pendingUsageLimit"?: number;
  /**
   * A namespace-specific key and value identifying what the quota applies to within an organization. The object contains exactly one entry. A value of `"*"` identifies the default quota applied to entities without a specific quota. This field is omitted for an organization-wide quota.
   */
  "scope"?: { [key: string]: string };
  /**
   * The quota limit in the usage units defined by the quota namespace. May be fractional for quotas configured before public writes required whole units. Omitted if this item failed to write.
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
    error: {
      baseName: "error",
      type: "string",
    },
    orgPublicId: {
      baseName: "org_public_id",
      type: "string",
    },
    pendingEffectiveFrom: {
      baseName: "pending_effective_from",
      type: "string",
    },
    pendingUsageLimit: {
      baseName: "pending_usage_limit",
      type: "number",
      format: "double",
    },
    scope: {
      baseName: "scope",
      type: "{ [key: string]: string; }",
    },
    usageLimit: {
      baseName: "usage_limit",
      type: "number",
      format: "double",
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
    return UsageQuotaBulkResultAttributes.attributeTypeMap;
  }

  public constructor() {}
}
