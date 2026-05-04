/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * GCP settings for buckets involved in inventory reporting.
 */
export class CloudInventorySyncConfigGCPRequestAttributes {
  /**
   * GCS bucket name where Datadog reads inventory reports.
   */
  "destinationBucketName": string;
  /**
   * GCP project ID for the inventory destination bucket.
   */
  "projectId": string;
  /**
   * Service account email used to read the destination bucket.
   */
  "serviceAccountEmail": string;
  /**
   * GCS bucket name that inventory reports are generated for.
   */
  "sourceBucketName": string;

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
    destinationBucketName: {
      baseName: "destination_bucket_name",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    serviceAccountEmail: {
      baseName: "service_account_email",
      type: "string",
      required: true,
    },
    sourceBucketName: {
      baseName: "source_bucket_name",
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
    return CloudInventorySyncConfigGCPRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
