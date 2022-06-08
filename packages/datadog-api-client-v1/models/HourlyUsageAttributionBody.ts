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
   * The source of the usage attribution tag configuration and the selected tags in the format of `<source_org_name>:::<selected tag 1>///<selected tag 2>///<selected tag 3>`.
   */
  "tagConfigSource"?: string;
  /**
   * Usage Summary by tag name.
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
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hour: {
      baseName: "hour",
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
    tagConfigSource: {
      baseName: "tag_config_source",
      type: "string",
    },
    tags: {
      baseName: "tags",
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsageAttributionBody.attributeTypeMap;
  }

  public constructor() {}
}
