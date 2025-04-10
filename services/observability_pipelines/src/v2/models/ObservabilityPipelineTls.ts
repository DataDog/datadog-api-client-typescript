import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for enabling TLS encryption.
 */
export class ObservabilityPipelineTls {
  /**
   * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
   */
  "caFile"?: string;
  /**
   * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
   */
  "crtFile": string;
  /**
   * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
   */
  "keyFile"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineTls.attributeTypeMap;
  }

  public constructor() {}
}
