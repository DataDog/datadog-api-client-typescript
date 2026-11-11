/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Cloud Cost Management dataflow. Only the fields provided are changed.
 */
export class NebiusCloudCostCollectionIntegrationDataflowSettingsRequest {
  /**
   * ID of the Nebius Object Storage (S3-compatible) access key used to read the cost export bucket. Required when this dataflow is enabled.
   */
  "accessKeyId"?: string;
  /**
   * Secret access key for the access key ID. Required when this dataflow is enabled. Omit it on update to keep the stored one; an empty string is rejected with a `422` response.
   */
  "accessKeySecret"?: string;
  /**
   * Name of the Nebius Object Storage bucket holding your cost export. Required when this dataflow is enabled; a request that enables it without the bucket fields and access keys is rejected with a `422` response.
   */
  "bucketName"?: string;
  /**
   * Prefix path within the bucket that locates the cost export, combining the export name and path prefix.
   */
  "bucketPrefixPath"?: string;
  /**
   * Region of the Nebius Object Storage bucket, such as `eu-north1`. Required when this dataflow is enabled.
   */
  "bucketRegion"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessKeyId: {
      baseName: "access_key_id",
      type: "string",
    },
    accessKeySecret: {
      baseName: "access_key_secret",
      type: "string",
    },
    bucketName: {
      baseName: "bucket_name",
      type: "string",
    },
    bucketPrefixPath: {
      baseName: "bucket_prefix_path",
      type: "string",
    },
    bucketRegion: {
      baseName: "bucket_region",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudCostCollectionIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
