import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSplunkHecSourceType } from "./ObservabilityPipelineSplunkHecSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `splunk_hec` source implements the Splunk HTTP Event Collector (HEC) API.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineSplunkHecSource {
  /**
   * Name of the environment variable or secret that holds the listen address for the HEC API.
   */
  "addressKey"?: string;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. Always `splunk_hec`.
   */
  "type": ObservabilityPipelineSplunkHecSourceType;
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
    addressKey: {
      baseName: "address_key",
      type: "string",
    },
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
      type: "ObservabilityPipelineSplunkHecSourceType",
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
    return ObservabilityPipelineSplunkHecSource.attributeTypeMap;
  }

  public constructor() {}
}
