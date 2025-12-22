import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineHttpClientDestinationAuthStrategy } from "./ObservabilityPipelineHttpClientDestinationAuthStrategy";
import { ObservabilityPipelineHttpClientDestinationCompression } from "./ObservabilityPipelineHttpClientDestinationCompression";
import { ObservabilityPipelineHttpClientDestinationEncoding } from "./ObservabilityPipelineHttpClientDestinationEncoding";
import { ObservabilityPipelineHttpClientDestinationType } from "./ObservabilityPipelineHttpClientDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `http_client` destination sends data to an HTTP endpoint.
 *
 * **Supported pipeline types:** logs, metrics
 */
export class ObservabilityPipelineHttpClientDestination {
  /**
   * HTTP authentication strategy.
   */
  "authStrategy"?: ObservabilityPipelineHttpClientDestinationAuthStrategy;
  /**
   * Compression configuration for HTTP requests.
   */
  "compression"?: ObservabilityPipelineHttpClientDestinationCompression;
  /**
   * Encoding format for log events.
   */
  "encoding": ObservabilityPipelineHttpClientDestinationEncoding;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the input for this component.
   */
  "inputs": Array<string>;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The destination type. The value should always be `http_client`.
   */
  "type": ObservabilityPipelineHttpClientDestinationType;
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
    authStrategy: {
      baseName: "auth_strategy",
      type: "ObservabilityPipelineHttpClientDestinationAuthStrategy",
    },
    compression: {
      baseName: "compression",
      type: "ObservabilityPipelineHttpClientDestinationCompression",
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineHttpClientDestinationEncoding",
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
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineHttpClientDestinationType",
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
    return ObservabilityPipelineHttpClientDestination.attributeTypeMap;
  }

  public constructor() {}
}
