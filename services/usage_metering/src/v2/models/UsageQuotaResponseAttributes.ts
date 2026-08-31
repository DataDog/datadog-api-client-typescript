import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a usage quota.
 */
export class UsageQuotaResponseAttributes {
  /**
   * Whether usage above the limit is actively blocked instead of only tracked or alerted on.
   */
  "enforced": boolean;
  /**
   * The public ID of the organization that owns the quota.
   */
  "orgPublicId": string;
  /**
   * A namespace-specific key and value identifying what the quota applies to within an organization. The object contains exactly one entry. A value of `"*"` identifies the default quota applied to entities without a specific quota. This field is omitted for an organization-wide quota.
   */
  "scope"?: { [key: string]: string };
  /**
   * The quota limit in the usage units defined by the quota namespace. May be fractional for quotas configured before public writes required whole units.
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
    orgPublicId: {
      baseName: "org_public_id",
      type: "string",
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
    return UsageQuotaResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
