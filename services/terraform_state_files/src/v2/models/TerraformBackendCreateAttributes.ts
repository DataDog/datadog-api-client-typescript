import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformBackendKind } from "./TerraformBackendKind";

/**
 * Settings for a new Terraform backend sync configuration.
 */
export class TerraformBackendCreateAttributes {
  /**
   * AWS account ID that owns the S3 buckets.
   */
  "accountId": string;
  /**
   * Backend type to synchronize.
   */
  "backendType": TerraformBackendKind;
  /**
   * Complete set of S3 bucket names to synchronize. Names must be nonempty and unique.
   */
  "bucketNames": Array<string>;
  /**
   * AWS region containing the S3 buckets.
   */
  "region": string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    backendType: {
      baseName: "backend_type",
      type: "TerraformBackendKind",
      required: true,
    },
    bucketNames: {
      baseName: "bucket_names",
      type: "Array<string>",
      required: true,
    },
    region: {
      baseName: "region",
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
    return TerraformBackendCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
