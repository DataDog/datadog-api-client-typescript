import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Google Cloud Platform storage access configuration.
 */
export class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail {
  /**
   * The relative file path from the GCS bucket root to the CSV file.
   */
  "filePath": string;
  /**
   * GCP bucket containing the CSV file.
   */
  "gcpBucketName": string;
  /**
   * GCP project ID where the bucket is located.
   */
  "gcpProjectId": string;
  /**
   * Service account email with read permissions for the GCS bucket.
   */
  "gcpServiceAccountEmail": string;
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
      required: true,
    },
    gcpBucketName: {
      baseName: "gcp_bucket_name",
      type: "string",
      required: true,
    },
    gcpProjectId: {
      baseName: "gcp_project_id",
      type: "string",
      required: true,
    },
    gcpServiceAccountEmail: {
      baseName: "gcp_service_account_email",
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
    return CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail.attributeTypeMap;
  }

  public constructor() {}
}
