import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail` object.
 */
export class CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail {
  /**
   * The relative file path from the GCS bucket root to the CSV file.
   */
  "filePath": string;
  /**
   * The name of the GCP bucket.
   */
  "gcpBucketName": string;
  /**
   * The ID of the GCP project.
   */
  "gcpProjectId": string;
  /**
   * The email of the GCP service account.
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
