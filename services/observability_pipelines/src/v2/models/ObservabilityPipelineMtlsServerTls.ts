import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for enabling TLS encryption between the pipeline component and external connecting clients.
 */
export class ObservabilityPipelineMtlsServerTls {
  /**
   * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
   */
  "caFile"?: string;
  /**
   * Path to the TLS server certificate file used to used to identify the pipeline component to connecting clients.
   */
  "crtFile": string;
  /**
   * Path to the private key file associated with the TLS server certificate.
   */
  "keyFile"?: string;
  /**
   * Name of the environment variable or secret that holds the passphrase for the private key file.
   */
  "keyPassKey"?: string;
  /**
   * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
   */
  "verifyCertificate"?: boolean;
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
    verifyCertificate: {
      baseName: "verify_certificate",
      type: "boolean",
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
    return ObservabilityPipelineMtlsServerTls.attributeTypeMap;
  }

  public constructor() {}
}
