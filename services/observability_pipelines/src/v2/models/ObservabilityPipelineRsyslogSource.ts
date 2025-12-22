import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineRsyslogSourceType } from "./ObservabilityPipelineRsyslogSourceType";
import { ObservabilityPipelineSyslogSourceMode } from "./ObservabilityPipelineSyslogSourceMode";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `rsyslog` source listens for logs over TCP or UDP from an `rsyslog` server using the syslog protocol.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineRsyslogSource {
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * Protocol used by the syslog source to receive messages.
   */
  "mode": ObservabilityPipelineSyslogSourceMode;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `rsyslog`.
   */
  "type": ObservabilityPipelineRsyslogSourceType;
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
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineSyslogSourceMode",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineRsyslogSourceType",
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
    return ObservabilityPipelineRsyslogSource.attributeTypeMap;
  }

  public constructor() {}
}
