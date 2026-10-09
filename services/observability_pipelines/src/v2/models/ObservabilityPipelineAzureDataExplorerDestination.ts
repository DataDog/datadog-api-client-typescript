import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAzureDataExplorerDestinationAuth } from "./ObservabilityPipelineAzureDataExplorerDestinationAuth";
import { ObservabilityPipelineAzureDataExplorerDestinationBatch } from "./ObservabilityPipelineAzureDataExplorerDestinationBatch";
import { ObservabilityPipelineAzureDataExplorerDestinationType } from "./ObservabilityPipelineAzureDataExplorerDestinationType";
import { ObservabilityPipelineAzureStorageDestinationCompressionGzip } from "./ObservabilityPipelineAzureStorageDestinationCompressionGzip";
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";

/**
 * The `azure_data_explorer` destination sends log events to an Azure Data Explorer table.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineAzureDataExplorerDestination {
  /**
   * Authentication configuration for Azure Data Explorer. The `azure_credential_kind` field selects the credential type.
   */
  "auth": ObservabilityPipelineAzureDataExplorerDestinationAuth;
  /**
   * Event batching settings for Azure Data Explorer ingestion.
   */
  "batch"?: ObservabilityPipelineAzureDataExplorerDestinationBatch;
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * Gzip compression.
   */
  "compression"?: ObservabilityPipelineAzureStorageDestinationCompressionGzip;
  /**
   * The name of the Azure Data Explorer database to ingest into. Supports template syntax.
   */
  "database": string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * Name of the environment variable or secret that holds the Azure Data Explorer ingestion endpoint URL.
   * Defaults to `DESTINATION_AZURE_DATA_EXPLORER_INGESTION_ENDPOINT` (prefixed with `DD_OP_` at runtime).
   */
  "ingestionEndpointKey"?: string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The name of a pre-created ingestion mapping on the table used to map incoming events to columns. Supports template syntax.
   */
  "mappingReference"?: string;
  /**
   * The name of the Azure Data Explorer table to ingest into. Supports template syntax.
   */
  "table": string;
  /**
   * The OAuth scope requested when acquiring an access token for Azure Data Explorer.
   * Defaults to `https://kusto.kusto.windows.net/.default`.
   */
  "tokenScope"?: string;
  /**
   * The destination type. The value should always be `azure_data_explorer`.
   */
  "type": ObservabilityPipelineAzureDataExplorerDestinationType;
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
    auth: {
      baseName: "auth",
      type: "ObservabilityPipelineAzureDataExplorerDestinationAuth",
      required: true,
    },
    batch: {
      baseName: "batch",
      type: "ObservabilityPipelineAzureDataExplorerDestinationBatch",
    },
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    compression: {
      baseName: "compression",
      type: "ObservabilityPipelineAzureStorageDestinationCompressionGzip",
    },
    database: {
      baseName: "database",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    ingestionEndpointKey: {
      baseName: "ingestion_endpoint_key",
      type: "string",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    mappingReference: {
      baseName: "mapping_reference",
      type: "string",
    },
    table: {
      baseName: "table",
      type: "string",
      required: true,
    },
    tokenScope: {
      baseName: "token_scope",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAzureDataExplorerDestinationType",
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
    return ObservabilityPipelineAzureDataExplorerDestination.attributeTypeMap;
  }

  public constructor() {}
}
