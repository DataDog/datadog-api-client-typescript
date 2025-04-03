import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Cost Attribution by Tag for a given organization.
 */
export class MonthlyCostAttributionAttributes {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]`.
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
   * The source of the cost attribution tag configuration and the selected tags in the format `<source_org_name>:::<selected tag 1>///<selected tag 2>///<selected tag 3>`.
   */
  "tagConfigSource"?: string;
  /**
   * Tag keys and values.
   * A `null` value here means that the requested tag breakdown cannot be applied because it does not match the [tags
   * configured for usage attribution](https://docs.datadoghq.com/account_management/billing/usage_attribution/#getting-started).
   * In this scenario the API returns the total cost, not broken down by tags.
   */
  "tags"?: any;
  /**
   * Shows the most recent hour in the current months for all organizations for which all costs were calculated.
   */
  "updatedAt"?: string;
  /**
   * Fields in Cost Attribution by tag(s). Example: `infra_host_on_demand_cost`, `infra_host_committed_cost`, `infra_host_total_cost`, `infra_host_percentage_in_org`, `infra_host_percentage_in_account`.
   */
  "values"?: any;
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
      type: "string",
    },
    values: {
      baseName: "values",
      type: "any",
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
    return MonthlyCostAttributionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
