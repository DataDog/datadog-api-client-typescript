import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating or updating a usage quota by scope. Each item must provide `usage_limit`, `pending_usage_limit`, or both. Providing only `pending_usage_limit` updates an existing organization-wide quota, never creates one, requires `enforced` to be omitted, and fails if the quota does not exist.
 */
export class UsageQuotaCreateAttributes {
  /**
   * Whether to actively block usage above `usage_limit` instead of only tracking or alerting on it. Required when `usage_limit` is provided and must be omitted when only `pending_usage_limit` is provided.
   */
  "enforced"?: boolean;
  /**
   * The non-negative, whole-number limit to schedule for the organization-wide quota in the usage units defined by the quota namespace. It is not checked against current usage. Each write schedules the value for 00:00 UTC on the first day of the next calendar month and replaces any previously scheduled change; the server computes `pending_effective_from`. Omit this field to leave any scheduled change unchanged, including when raising `usage_limit`. Cancel a scheduled change only by deleting the quota's `/pending` sub-resource.
   */
  "pendingUsageLimit"?: number;
  /**
   * A namespace-specific key and value identifying what the quota applies to within an organization. The object must contain exactly one entry. Use `"*"` as the value for the default quota applied to entities without a specific quota, or omit the scope for an organization-wide quota. A specific value must identify an existing user handle in the caller's organization when `include_descendants` is false. When `include_descendants` is true, the handle must exist in the caller's organization or in at least one targeted descendant organization; the quota is then applied only to the organizations where that handle exists, and the request fails only if the handle exists in none of them.
   */
  "scope"?: { [key: string]: string };
  /**
   * The non-negative, whole-number quota limit to set in the usage units defined by the quota namespace. For an organization-wide quota (scope omitted), the limit must be greater than usage already recorded in the current period. When this field is provided, `enforced` is required.
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
    scope: {
      baseName: "scope",
      type: "{ [key: string]: string; }",
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
    return UsageQuotaCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
