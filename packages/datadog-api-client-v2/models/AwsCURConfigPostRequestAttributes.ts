/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccountFilteringConfig } from "./AccountFilteringConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for AWS CUR config Post Request.
 */
export class AwsCURConfigPostRequestAttributes {
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
  "bucketRegion"?: string;
  /**
   * Whether or not the Cloud Cost Management account is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The month of the report.
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
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsCURConfigPostRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
