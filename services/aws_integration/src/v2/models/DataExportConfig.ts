import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Cost and Usage Report data export configuration.
 */
export class DataExportConfig {
  /**
   * Name of the S3 bucket where the Cost and Usage Report is stored.
   */
  "bucketName": string;
  /**
   * AWS region of the S3 bucket.
   */
  "bucketRegion": string;
  /**
   * Name of the Cost and Usage Report.
   */
  "reportName": string;
  /**
   * S3 prefix where the Cost and Usage Report is stored.
   */
  "reportPrefix": string;
  /**
   * Type of the Cost and Usage Report. Currently only `CUR2.0` is supported.
   */
  "reportType": string;
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
      required: true,
    },
    bucketRegion: {
      baseName: "bucket_region",
      type: "string",
      required: true,
    },
    reportName: {
      baseName: "report_name",
      type: "string",
      required: true,
    },
    reportPrefix: {
      baseName: "report_prefix",
      type: "string",
      required: true,
    },
    reportType: {
      baseName: "report_type",
      type: "string",
      required: true,
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
