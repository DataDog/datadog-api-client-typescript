import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating or updating a usage quota by scope.
 */
export class UsageQuotaCreateAttributes {
  /**
   * Whether to actively block usage above the limit instead of only tracking or alerting on it.
   */
  "enforced": boolean;
  /**
   * A namespace-specific key and value identifying what the quota applies to within an organization. The object must contain exactly one entry. Use `"*"` as the value for the default quota applied to entities without a specific quota, or omit the scope for an organization-wide quota. A specific value must identify an existing user handle in the caller's organization when `include_descendants` is false. When `include_descendants` is true, the handle must exist in the caller's organization or in at least one targeted descendant organization; the quota is then applied only to the organizations where that handle exists, and the request fails only if the handle exists in none of them.
   */
  "scope"?: { [key: string]: string };
  /**
   * The quota limit to set in the usage units defined by the quota namespace. For an organization-wide quota (scope omitted), the limit must be greater than the usage already recorded in the current period.
   */
  "usageLimit": number;
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
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "{ [key: string]: string; }",
    },
    usageLimit: {
      baseName: "usage_limit",
      type: "number",
      required: true,
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
