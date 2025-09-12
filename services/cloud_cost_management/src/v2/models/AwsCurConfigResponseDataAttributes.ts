import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCurConfigResponseDataAttributesAccountFilters } from "./AwsCurConfigResponseDataAttributesAccountFilters";

/**
 * The definition of `AwsCurConfigResponseDataAttributes` object.
 */
export class AwsCurConfigResponseDataAttributes {
  /**
   * The definition of `AwsCurConfigResponseDataAttributesAccountFilters` object.
   */
  "accountFilters"?: AwsCurConfigResponseDataAttributesAccountFilters;
  /**
   * The `attributes` `account_id`.
   */
  "accountId"?: string;
  /**
   * The `attributes` `bucket_name`.
   */
  "bucketName"?: string;
  /**
   * The `attributes` `bucket_region`.
   */
  "bucketRegion"?: string;
  /**
   * The `attributes` `created_at`.
   */
  "createdAt"?: string;
  /**
   * The `attributes` `error_messages`.
   */
  "errorMessages"?: Array<string>;
  /**
   * The `attributes` `months`.
   */
  "months"?: number;
  /**
   * The `attributes` `report_name`.
   */
  "reportName"?: string;
  /**
   * The `attributes` `report_prefix`.
   */
  "reportPrefix"?: string;
  /**
   * The `attributes` `status`.
   */
  "status"?: string;
  /**
   * The `attributes` `status_updated_at`.
   */
  "statusUpdatedAt"?: string;
  /**
   * The `attributes` `updated_at`.
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
      type: "AwsCurConfigResponseDataAttributesAccountFilters",
    },
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    bucketName: {
      baseName: "bucket_name",
      type: "string",
    },
    bucketRegion: {
      baseName: "bucket_region",
      type: "string",
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
      format: "int64",
    },
    reportName: {
      baseName: "report_name",
      type: "string",
    },
    reportPrefix: {
      baseName: "report_prefix",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return AwsCurConfigResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
