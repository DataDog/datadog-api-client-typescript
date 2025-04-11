import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Number of Synthetics Browser tests run for each hour for a given organization.
 */
export class UsageSyntheticsBrowserHour {
  /**
   * Contains the number of Synthetics Browser tests run.
   */
  "browserCheckCallsCount"?: number;
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
    browserCheckCallsCount: {
      baseName: "browser_check_calls_count",
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
    return UsageSyntheticsBrowserHour.attributeTypeMap;
  }

  public constructor() {}
}
