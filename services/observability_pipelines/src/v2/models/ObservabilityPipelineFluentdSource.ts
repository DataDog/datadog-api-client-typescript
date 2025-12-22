import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineFluentdSourceType } from "./ObservabilityPipelineFluentdSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `fluentd` source ingests logs from a Fluentd-compatible service.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineFluentdSource {
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `fluentd.
   */
  "type": ObservabilityPipelineFluentdSourceType;
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
      type: "ObservabilityPipelineFluentdSourceType",
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
    return ObservabilityPipelineFluentdSource.attributeTypeMap;
  }

  public constructor() {}
}
