import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonthlyUsageAttributionValues } from "./MonthlyUsageAttributionValues";

/**
 * Usage Summary by tag for a given organization.
 */
export class MonthlyUsageAttributionBody {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM].
   */
  "month"?: Date;
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
   * The source of the usage attribution tag configuration and the selected tags in the format `<source_org_name>:::<selected tag 1>///<selected tag 2>///<selected tag 3>`.
   */
  "tagConfigSource"?: string;
  /**
   * Tag keys and values.
   * 
   * A `null` value here means that the requested tag breakdown cannot be applied because it does not match the [tags
   * configured for usage attribution](https://docs.datadoghq.com/account_management/billing/usage_attribution/#getting-started).
   * In this scenario the API returns the total usage, not broken down by tags.
   */
  "tags"?: any;
  /**
   * Datetime of the most recent update to the usage values.
   */
  "updatedAt"?: Date;
  /**
   * Fields in Usage Summary by tag(s).
   */
  "values"?: MonthlyUsageAttributionValues;
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
    month: {
      baseName: "month",
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
      baseName: "region",
      type: "string",
    },
    tagConfigSource: {
      baseName: "tag_config_source",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "any",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    values: {
      baseName: "values",
      type: "MonthlyUsageAttributionValues",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionBody.attributeTypeMap;
  }

  public constructor() {}
}
