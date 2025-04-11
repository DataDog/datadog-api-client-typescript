import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccountFilteringConfig } from "./AccountFilteringConfig";

/**
 * Attributes for An AWS CUR config.
 */
export class AwsCURConfigAttributes {
  /**
   * The account filtering configuration.
   */
  "accountFilters"?: AccountFilteringConfig;
  /**
   * The AWS account ID.
   */
  "accountId": string;
  /**
   * The AWS bucket name used to store the Cost and Usage Report.
   */
  "bucketName": string;
  /**
   * The region the bucket is located in.
   */
  "bucketRegion": string;
  /**
   * The timestamp when the AWS CUR config was created.
   */
  "createdAt"?: string;
  /**
   * The error messages for the AWS CUR config.
   */
  "errorMessages"?: Array<string>;
  /**
   * The number of months the report has been backfilled.
   */
  "months"?: number;
  /**
   * The name of the Cost and Usage Report.
   */
  "reportName": string;
  /**
   * The report prefix used for the Cost and Usage Report.
   */
  "reportPrefix": string;
  /**
   * The status of the AWS CUR.
   */
  "status": string;
  /**
   * The timestamp when the AWS CUR config status was updated.
   */
  "statusUpdatedAt"?: string;
  /**
   * The timestamp when the AWS CUR config status was updated.
   */
  "updatedAt"?: string;
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
    accountFilters: {
      baseName: "account_filters",
      type: "AccountFilteringConfig",
    },
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
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
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
    },
    months: {
      baseName: "months",
      type: "number",
      format: "int32",
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
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    statusUpdatedAt: {
      baseName: "status_updated_at",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
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
    return AwsCURConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
