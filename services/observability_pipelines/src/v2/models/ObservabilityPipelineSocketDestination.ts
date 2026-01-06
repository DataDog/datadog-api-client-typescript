import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineSocketDestinationEncoding } from "./ObservabilityPipelineSocketDestinationEncoding";
import { ObservabilityPipelineSocketDestinationFraming } from "./ObservabilityPipelineSocketDestinationFraming";
import { ObservabilityPipelineSocketDestinationMode } from "./ObservabilityPipelineSocketDestinationMode";
import { ObservabilityPipelineSocketDestinationType } from "./ObservabilityPipelineSocketDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `socket` destination sends logs over TCP or UDP to a remote server.
 */
export class ObservabilityPipelineSocketDestination {
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * Encoding format for log events.
   */
  "encoding": ObservabilityPipelineSocketDestinationEncoding;
  /**
   * Framing method configuration.
   */
  "framing": ObservabilityPipelineSocketDestinationFraming;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * Protocol used to send logs.
   */
  "mode": ObservabilityPipelineSocketDestinationMode;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The destination type. The value should always be `socket`.
   */
  "type": ObservabilityPipelineSocketDestinationType;
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
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineSocketDestinationEncoding",
      required: true,
    },
    framing: {
      baseName: "framing",
      type: "ObservabilityPipelineSocketDestinationFraming",
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
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineSocketDestinationMode",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSocketDestinationType",
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
    return ObservabilityPipelineSocketDestination.attributeTypeMap;
  }

  public constructor() {}
}
