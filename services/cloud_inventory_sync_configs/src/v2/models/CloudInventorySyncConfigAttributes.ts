import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudInventoryCloudProviderId } from "./CloudInventoryCloudProviderId";

/**
 * Attributes for a cloud inventory sync configuration. Values beyond `id` may be omitted immediately after upsert.
 */
export class CloudInventorySyncConfigAttributes {
  /**
   * AWS account ID for the inventory bucket.
   */
  "awsAccountId": string;
  /**
   * AWS S3 bucket name for inventory files.
   */
  "awsBucketName": string;
  /**
   * AWS Region for the inventory bucket.
   */
  "awsRegion": string;
  /**
   * Azure AD application (client) ID.
   */
  "azureClientId": string;
  /**
   * Azure blob container name.
   */
  "azureContainerName": string;
  /**
   * Azure storage account name.
   */
  "azureStorageAccountName": string;
  /**
   * Azure AD tenant ID.
   */
  "azureTenantId": string;
  /**
   * Cloud provider for this sync configuration (`aws`, `gcp`, or `azure`). For requests, must match the provider block supplied under `attributes`.
   */
  "cloudProvider": CloudInventoryCloudProviderId;
  /**
   * Human-readable error detail when sync is unhealthy.
   */
  "error": string;
  /**
   * Machine-readable error code when sync is unhealthy.
   */
  "errorCode": string;
  /**
   * GCS bucket name for inventory files Datadog reads.
   */
  "gcpBucketName": string;
  /**
   * GCP project ID.
   */
  "gcpProjectId": string;
  /**
   * Service account email for bucket access.
   */
  "gcpServiceAccountEmail": string;
  /**
   * Object key prefix or `/` when the entire bucket is synced.
   */
  "prefix": string;
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
    awsAccountId: {
      baseName: "aws_account_id",
      type: "string",
      required: true,
    },
    awsBucketName: {
      baseName: "aws_bucket_name",
      type: "string",
      required: true,
    },
    awsRegion: {
      baseName: "aws_region",
      type: "string",
      required: true,
    },
    azureClientId: {
      baseName: "azure_client_id",
      type: "string",
      required: true,
    },
    azureContainerName: {
      baseName: "azure_container_name",
      type: "string",
      required: true,
    },
    azureStorageAccountName: {
      baseName: "azure_storage_account_name",
      type: "string",
      required: true,
    },
    azureTenantId: {
      baseName: "azure_tenant_id",
      type: "string",
      required: true,
    },
    cloudProvider: {
      baseName: "cloud_provider",
      type: "CloudInventoryCloudProviderId",
      required: true,
    },
    error: {
      baseName: "error",
      type: "string",
      required: true,
    },
    errorCode: {
      baseName: "error_code",
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
    prefix: {
      baseName: "prefix",
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
    return CloudInventorySyncConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
