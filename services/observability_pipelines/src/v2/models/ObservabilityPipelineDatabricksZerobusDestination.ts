import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineDatabricksZerobusDestinationAuth } from "./ObservabilityPipelineDatabricksZerobusDestinationAuth";
import { ObservabilityPipelineDatabricksZerobusDestinationType } from "./ObservabilityPipelineDatabricksZerobusDestinationType";

/**
 * The `databricks_zerobus` destination sends logs to Databricks using the Zerobus ingestion API, streaming data directly into your Databricks Lakehouse.
 *
 * **Supported pipeline types:** Logs, rehydration
 */
export class ObservabilityPipelineDatabricksZerobusDestination {
  /**
   * OAuth credentials for authenticating with the Databricks Zerobus ingestion API.
   */
  "auth": ObservabilityPipelineDatabricksZerobusDestinationAuth;
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * Name of the environment variable or the secret identifier that references the Databricks Zerobus ingestion endpoint, which is used to stream data directly into your Databricks Lakehouse.
   */
  "ingestionEndpointKey"?: string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The fully qualified name of your target Databricks table. Make sure this table already exists in your Databricks workspace before deploying.
   */
  "tableName": string;
  /**
   * The destination type. The value must be `databricks_zerobus`.
   */
  "type": ObservabilityPipelineDatabricksZerobusDestinationType;
  /**
   * Name of the environment variable or the secret identifier that references your Databricks workspace URL, which is used to communicate with the Unity Catalog API.
   */
  "unityCatalogEndpointKey"?: string;
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
      type: "ObservabilityPipelineDatabricksZerobusDestinationAuth",
      required: true,
    },
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
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
    tableName: {
      baseName: "table_name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineDatabricksZerobusDestinationType",
      required: true,
    },
    unityCatalogEndpointKey: {
      baseName: "unity_catalog_endpoint_key",
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
    return ObservabilityPipelineDatabricksZerobusDestination.attributeTypeMap;
  }

  public constructor() {}
}
