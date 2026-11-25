/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineClientIdentity } from "./ObservabilityPipelineClientIdentity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for enabling TLS encryption between the pipeline component and external connecting clients, or mutual TLS when `verify_certificate` is `true`. Mutual TLS also enables an optional allowlist of client certificate identities.
 */
export class ObservabilityPipelineMtlsServerTlsWithClientIdentity {
  /**
   * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
   */
  "caFile"?: string;
  /**
   * Restricts which clients may connect, based on the identities in their TLS certificate. Checks run during the TLS handshake, after the client certificate chain is validated against `ca_file`, and never relax that validation.
   * Requires `verify_certificate: true` and `ca_file`. Set exactly one of `allowlist_file` or `allowlist`.
   * When set, connections are closed after a maximum age of 300 seconds so that clients removed from the allowlist are disconnected.
   * Requires Observability Pipelines Worker 2.27 or later.
   */
  "clientIdentity"?: ObservabilityPipelineClientIdentity;
  /**
   * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
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
    clientIdentity: {
      baseName: "client_identity",
      type: "ObservabilityPipelineClientIdentity",
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
    return ObservabilityPipelineMtlsServerTlsWithClientIdentity.attributeTypeMap;
  }

  public constructor() {}
}
