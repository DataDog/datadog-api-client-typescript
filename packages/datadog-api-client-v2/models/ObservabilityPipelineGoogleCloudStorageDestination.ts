/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineGcpAuth } from "./ObservabilityPipelineGcpAuth";
import { ObservabilityPipelineGoogleCloudStorageDestinationAcl } from "./ObservabilityPipelineGoogleCloudStorageDestinationAcl";
import { ObservabilityPipelineGoogleCloudStorageDestinationStorageClass } from "./ObservabilityPipelineGoogleCloudStorageDestinationStorageClass";
import { ObservabilityPipelineGoogleCloudStorageDestinationType } from "./ObservabilityPipelineGoogleCloudStorageDestinationType";
import { ObservabilityPipelineMetadataEntry } from "./ObservabilityPipelineMetadataEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `google_cloud_storage` destination stores logs in a Google Cloud Storage (GCS) bucket.
 * It requires a bucket name, GCP authentication, and metadata fields.
 */
export class ObservabilityPipelineGoogleCloudStorageDestination {
  /**
   * Access control list setting for objects written to the bucket.
   */
  "acl"?: ObservabilityPipelineGoogleCloudStorageDestinationAcl;
  /**
   * GCP credentials used to authenticate with Google Cloud Storage.
   */
  "auth"?: ObservabilityPipelineGcpAuth;
  /**
   * Name of the GCS bucket.
   */
  "bucket": string;
  /**
   * Unique identifier for the destination component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * Optional prefix for object keys within the GCS bucket.
   */
  "keyPrefix"?: string;
  /**
   * Custom metadata to attach to each object uploaded to the GCS bucket.
   */
  "metadata"?: Array<ObservabilityPipelineMetadataEntry>;
  /**
   * Storage class used for objects stored in GCS.
   */
  "storageClass": ObservabilityPipelineGoogleCloudStorageDestinationStorageClass;
  /**
   * The destination type. Always `google_cloud_storage`.
   */
  "type": ObservabilityPipelineGoogleCloudStorageDestinationType;

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
    acl: {
      baseName: "acl",
      type: "ObservabilityPipelineGoogleCloudStorageDestinationAcl",
    },
    auth: {
      baseName: "auth",
      type: "ObservabilityPipelineGcpAuth",
    },
    bucket: {
      baseName: "bucket",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    keyPrefix: {
      baseName: "key_prefix",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "Array<ObservabilityPipelineMetadataEntry>",
    },
    storageClass: {
      baseName: "storage_class",
      type: "ObservabilityPipelineGoogleCloudStorageDestinationStorageClass",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineGoogleCloudStorageDestinationType",
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
    return ObservabilityPipelineGoogleCloudStorageDestination.attributeTypeMap;
  }

  public constructor() {}
}
