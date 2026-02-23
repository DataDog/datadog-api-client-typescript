import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureStorageDestinationType } from "./AzureStorageDestinationType";
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";

/**
 * The `azure_storage` destination forwards logs to an Azure Blob Storage container.
 *
 * **Supported pipeline types:** logs
 */
export class AzureStorageDestination {
  /**
   * Optional prefix for blobs written to the container.
   */
  "blobPrefix"?: string;
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * Name of the environment variable or secret that holds the Azure Storage connection string.
   */
  "connectionStringKey"?: string;
  /**
   * The name of the Azure Blob Storage container to store logs in.
   */
  "containerName": string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The destination type. The value should always be `azure_storage`.
   */
  "type": AzureStorageDestinationType;
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
    blobPrefix: {
      baseName: "blob_prefix",
      type: "string",
    },
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    connectionStringKey: {
      baseName: "connection_string_key",
      type: "string",
    },
    containerName: {
      baseName: "container_name",
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
    type: {
      baseName: "type",
      type: "AzureStorageDestinationType",
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
    return AzureStorageDestination.attributeTypeMap;
  }

  public constructor() {}
}
