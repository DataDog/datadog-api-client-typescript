/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSyslogNgSourceType } from "./ObservabilityPipelineSyslogNgSourceType";
import { ObservabilityPipelineSyslogSourceMode } from "./ObservabilityPipelineSyslogSourceMode";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `syslog_ng` source listens for logs over TCP or UDP from a `syslog-ng` server using the syslog protocol.
 */
export class ObservabilityPipelineSyslogNgSource {
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * Protocol used by the syslog source to receive messages.
   */
  "mode": ObservabilityPipelineSyslogSourceMode;
  /**
   * Configuration for enabling TLS encryption.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The source type. The value should always be `syslog_ng`.
   */
  "type": ObservabilityPipelineSyslogNgSourceType;

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
      type: "ObservabilityPipelineSyslogNgSourceType",
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
    return ObservabilityPipelineSyslogNgSource.attributeTypeMap;
  }

  public constructor() {}
}
