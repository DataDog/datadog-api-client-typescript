import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSplunkTcpSourceType } from "./ObservabilityPipelineSplunkTcpSourceType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `splunk_tcp` source receives logs from a Splunk Universal Forwarder over TCP.
 * TLS is supported for secure transmission.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineSplunkTcpSource {
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. Always `splunk_tcp`.
   */
  "type": ObservabilityPipelineSplunkTcpSourceType;
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
      type: "ObservabilityPipelineSplunkTcpSourceType",
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
    return ObservabilityPipelineSplunkTcpSource.attributeTypeMap;
  }

  public constructor() {}
}
