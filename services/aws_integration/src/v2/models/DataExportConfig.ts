import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Cost and Usage Report data export configuration.
 */
export class DataExportConfig {
  /**
   * Name of the S3 bucket where the Cost and Usage Report is stored.
   */
  "bucketName"?: string;
  /**
   * AWS region of the S3 bucket.
   */
  "bucketRegion"?: string;
  /**
   * Name of the Cost and Usage Report.
   */
  "reportName"?: string;
  /**
   * S3 prefix where the Cost and Usage Report is stored.
   */
  "reportPrefix"?: string;
  /**
   * Type of the Cost and Usage Report.
   */
  "reportType"?: string;
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
    bucketName: {
      baseName: "bucket_name",
      type: "string",
    },
    bucketRegion: {
      baseName: "bucket_region",
      type: "string",
    },
    reportName: {
      baseName: "report_name",
      type: "string",
    },
    reportPrefix: {
      baseName: "report_prefix",
      type: "string",
    },
    reportType: {
      baseName: "report_type",
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
    return DataExportConfig.attributeTypeMap;
  }

  public constructor() {}
}
