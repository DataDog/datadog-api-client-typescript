import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSyslogNgDestinationType } from "./ObservabilityPipelineSyslogNgDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

/**
 * The `syslog_ng` destination forwards logs to an external `syslog-ng` server over TCP or UDP using the syslog protocol.
 */
export class ObservabilityPipelineSyslogNgDestination {
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * Optional socket keepalive duration in milliseconds.
   */
  "keepalive"?: number;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The destination type. The value should always be `syslog_ng`.
   */
  "type": ObservabilityPipelineSyslogNgDestinationType;
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
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    keepalive: {
      baseName: "keepalive",
      type: "number",
      format: "int64",
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSyslogNgDestinationType",
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
    return ObservabilityPipelineSyslogNgDestination.attributeTypeMap;
  }

  public constructor() {}
}
