/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsageAttributionUsageType } from "./HourlyUsageAttributionUsageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The usage for one set of tags for one hour.
 */
export class HourlyUsageAttributionBody {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The name of the organization.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The region of the Datadog instance that the organization belongs to.
   */
  "region"?: string;
  /**
   * The source of the usage attribution tag configuration and the selected tags in the format of `<source_org_name>:::<selected tag 1>///<selected tag 2>///<selected tag 3>`.
   */
  "tagConfigSource"?: string;
  /**
   * Tag keys and values.
   *
   * A `null` value here means that the requested tag breakdown cannot be applied because it does not match the [tags
   * configured for usage attribution](https://docs.datadoghq.com/account_management/billing/usage_attribution/#getting-started).
   * In this scenario the API returns the total usage, not broken down by tags.
   */
  "tags"?: { [key: string]: Array<string> };
  /**
   * Total product usage for the given tags within the hour.
   */
  "totalUsageSum"?: number;
  /**
   * Shows the most recent hour in the current month for all organizations where usages are calculated.
   */
  "updatedAt"?: string;
  /**
   * Supported products for hourly usage attribution requests.
   */
  "usageType"?: HourlyUsageAttributionUsageType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hour: {
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    region: {
      type: "string",
    },
    tagConfigSource: {
      baseName: "tag_config_source",
      type: "string",
    },
    tags: {
      type: "{ [key: string]: Array<string>; }",
    },
    totalUsageSum: {
      baseName: "total_usage_sum",
      type: "number",
      format: "double",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
    },
    usageType: {
      baseName: "usage_type",
      type: "HourlyUsageAttributionUsageType",
    },
  };
}
