import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineWebsocketSourceTlsWithClientCertMode } from "./ObservabilityPipelineWebsocketSourceTlsWithClientCertMode";

/**
 * TLS configuration that enables encryption and presents a client certificate for mutual TLS authentication.
 */
export class ObservabilityPipelineWebsocketSourceTlsWithClientCert {
  /**
   * Path to the Certificate Authority (CA) file used to validate the remote server's TLS certificate.
   */
  "caFile"?: string;
  /**
   * Path to the TLS client certificate file used to identify this source to the remote server.
   */
  "crtFile": string;
  /**
   * Path to the private key file associated with the client certificate.
   */
  "keyFile"?: string;
  /**
   * Name of the environment variable or secret that holds the passphrase for the private key file.
   */
  "keyPassKey"?: string;
  /**
   * TLS mode. Must be `with_client_cert`.
   */
  "mode": ObservabilityPipelineWebsocketSourceTlsWithClientCertMode;
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
    caFile: {
      baseName: "ca_file",
      type: "string",
    },
    crtFile: {
      baseName: "crt_file",
      type: "string",
      required: true,
    },
    keyFile: {
      baseName: "key_file",
      type: "string",
    },
    keyPassKey: {
      baseName: "key_pass_key",
      type: "string",
    },
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineWebsocketSourceTlsWithClientCertMode",
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
    return ObservabilityPipelineWebsocketSourceTlsWithClientCert.attributeTypeMap;
  }

  public constructor() {}
}
