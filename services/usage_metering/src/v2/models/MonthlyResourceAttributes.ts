import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Resource usage and organization details for the requested month.
 */
export class MonthlyResourceAttributes {
  /**
   * Date of the source usage data. May be empty when unavailable.
   */
  "dataDate"?: string;
  /**
   * Name of the organization that owns the resource.
   */
  "orgName"?: string;
  /**
   * Public ID of the organization that owns the resource.
   */
  "publicId"?: string;
  /**
   * Name of the resource, such as a host name, metric name, or log index.
   */
  "resourceName"?: string;
  /**
   * Resource tags when available. Empty for resource types without tag data.
   */
  "tags"?: { [key: string]: string };
  /**
   * Selected billing hour for percentile usage, or the first day of the month for monthly usage. May be empty when unavailable.
   */
  "timestamp"?: string;
  /**
   * Usage type of the resource. Values depend on the billing dimension and are not limited to host types.
   */
  "usageType"?: string;
  /**
   * Usage attributed to the resource in the units of the requested billing dimension. Values can be fractional.
   */
  "usageValue"?: number;
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
    dataDate: {
      baseName: "data_date",
      type: "string",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    resourceName: {
      baseName: "resource_name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    timestamp: {
      baseName: "timestamp",
      type: "string",
    },
    usageType: {
      baseName: "usage_type",
      type: "string",
    },
    usageValue: {
      baseName: "usage_value",
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
    return MonthlyResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
