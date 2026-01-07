import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression";
import { ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding";
import { ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `crowdstrike_next_gen_siem` destination forwards logs to CrowdStrike Next Gen SIEM.
 */
export class ObservabilityPipelineCrowdStrikeNextGenSiemDestination {
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * Compression configuration for log events.
   */
  "compression"?: ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression;
  /**
   * Encoding format for log events.
   */
  "encoding": ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The destination type. The value should always be `crowdstrike_next_gen_siem`.
   */
  "type": ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType;
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
    compression: {
      baseName: "compression",
      type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression",
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding",
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
      type: "ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType",
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
    return ObservabilityPipelineCrowdStrikeNextGenSiemDestination.attributeTypeMap;
  }

  public constructor() {}
}
