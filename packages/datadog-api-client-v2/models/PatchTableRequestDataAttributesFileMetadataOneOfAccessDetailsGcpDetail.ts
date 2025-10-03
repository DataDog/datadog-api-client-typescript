/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail` object.
 */
export class PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail {
  /**
   * The relative file path from the GCS bucket root to the CSV file.
   */
  "filePath"?: string;
  /**
   * The name of the GCP bucket.
   */
  "gcpBucketName"?: string;
  /**
   * The ID of the GCP project.
   */
  "gcpProjectId"?: string;
  /**
   * The email of the GCP service account.
   */
  "gcpServiceAccountEmail"?: string;

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
    filePath: {
      baseName: "file_path",
      type: "string",
    },
    gcpBucketName: {
      baseName: "gcp_bucket_name",
      type: "string",
    },
    gcpProjectId: {
      baseName: "gcp_project_id",
      type: "string",
    },
    gcpServiceAccountEmail: {
      baseName: "gcp_service_account_email",
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
    return PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail.attributeTypeMap;
  }

  public constructor() {}
}
