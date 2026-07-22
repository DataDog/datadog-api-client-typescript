import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineWebsocketSourceTlsEnabledMode } from "./ObservabilityPipelineWebsocketSourceTlsEnabledMode";

/**
 * TLS configuration that enables encryption without a client certificate. Use this for standard `wss://` connections that do not require mutual TLS.
 */
export class ObservabilityPipelineWebsocketSourceTlsEnabled {
  /**
   * TLS mode. Must be `enabled`.
   */
  "mode": ObservabilityPipelineWebsocketSourceTlsEnabledMode;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineWebsocketSourceTlsEnabledMode",
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
    return ObservabilityPipelineWebsocketSourceTlsEnabled.attributeTypeMap;
  }

  public constructor() {}
}
