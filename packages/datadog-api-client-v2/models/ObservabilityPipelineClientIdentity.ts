/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineClientIdentityAllowlist } from "./ObservabilityPipelineClientIdentityAllowlist";
import { ObservabilityPipelineClientIdentityMode } from "./ObservabilityPipelineClientIdentityMode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Restricts which clients may connect, based on the identities in their TLS certificate. Checks run during the TLS handshake, after the client certificate chain is validated against `ca_file`, and never relax that validation.
 * Requires `verify_certificate: true` and `ca_file`. Set exactly one of `allowlist_file` or `allowlist`.
 * When set, connections are closed after a maximum age of 300 seconds so that clients removed from the allowlist are disconnected.
 * Requires Observability Pipelines Worker 2.27 or later.
 */
export class ObservabilityPipelineClientIdentity {
  /**
   * An allowlist of client identities. A client is allowed when any rule matches.
   */
  "allowlist"?: ObservabilityPipelineClientIdentityAllowlist;
  /**
   * Path to an allowlist file, relative to the Worker's data directory. The Worker reloads the file when it changes. Must not contain parent directory (`..`) references.
   */
  "allowlistFile"?: string;
  /**
   * What happens to a client that no rule allows. `enforce` rejects the TLS handshake. `audit` accepts the client and reports that it would have been rejected.
   */
  "mode"?: ObservabilityPipelineClientIdentityMode;

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
    allowlist: {
      baseName: "allowlist",
      type: "ObservabilityPipelineClientIdentityAllowlist",
    },
    allowlistFile: {
      baseName: "allowlist_file",
      type: "string",
    },
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineClientIdentityMode",
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
    return ObservabilityPipelineClientIdentity.attributeTypeMap;
  }

  public constructor() {}
}
