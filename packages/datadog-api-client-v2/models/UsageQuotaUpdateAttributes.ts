/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes to update on a usage quota. At least one of `usage_limit`, `enforced`, or `pending_usage_limit` must be provided. Omitting a property leaves its current value unchanged.
 */
export class UsageQuotaUpdateAttributes {
  /**
   * Whether to actively block usage above the limit. Omit this field to leave the current enforcement setting unchanged.
   */
  "enforced"?: boolean;
  /**
   * The non-negative, whole-number limit to schedule for the organization-wide quota in the usage units defined by the quota namespace. It is not checked against current usage. Each write schedules the value for 00:00 UTC on the first day of the next calendar month and replaces any previously scheduled change; the server computes `pending_effective_from`. Omit this field to leave any scheduled change unchanged, including when raising `usage_limit`; use `DELETE /api/v2/usage/quotas/{quota_namespace}/{id}/pending` to cancel one.
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
