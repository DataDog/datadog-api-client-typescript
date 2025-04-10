import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDatadogAgentSourceType } from "./ObservabilityPipelineDatadogAgentSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `datadog_agent` source collects logs from the Datadog Agent.
 */
export class ObservabilityPipelineDatadogAgentSource {
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * Configuration for enabling TLS encryption.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `datadog_agent`.
   */
  "type": ObservabilityPipelineDatadogAgentSourceType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineDatadogAgentSourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineDatadogAgentSource.attributeTypeMap;
  }

  public constructor() {}
}
