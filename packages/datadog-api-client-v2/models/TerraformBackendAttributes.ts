/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TerraformBackendBucket } from "./TerraformBackendBucket";
import { TerraformBackendKind } from "./TerraformBackendKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Terraform backend sync configuration and bucket statuses.
 */
export class TerraformBackendAttributes {
  /**
   * AWS account ID that owns the S3 buckets.
   */
  "accountId": string;
  /**
   * Backend type to synchronize.
   */
  "backendType": TerraformBackendKind;
  /**
   * Source buckets and their synchronization statuses.
   */
  "buckets": Array<TerraformBackendBucket>;
  /**
   * Datadog organization ID.
   */
  "orgId": string;
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
    buckets: {
      baseName: "buckets",
      type: "Array<TerraformBackendBucket>",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "string",
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
    return TerraformBackendAttributes.attributeTypeMap;
  }

  public constructor() {}
}
