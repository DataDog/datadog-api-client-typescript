import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Database Monitoring usage for a given organization for a given hour.
 */
export class UsageDBMHour {
  /**
   * The total number of Database Monitoring host hours from the start of the given hour’s month until the given hour.
   */
  "dbmHostCount"?: number;
  /**
   * The total number of normalized Database Monitoring queries from the start of the given hour’s month until the given hour.
   */
  "dbmQueriesCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
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
    dbmHostCount: {
      baseName: "dbm_host_count",
      type: "number",
      format: "int64",
    },
    dbmQueriesCount: {
      baseName: "dbm_queries_count",
      type: "number",
      format: "int64",
    },
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageDBMHour.attributeTypeMap;
  }

  public constructor() {}
}
