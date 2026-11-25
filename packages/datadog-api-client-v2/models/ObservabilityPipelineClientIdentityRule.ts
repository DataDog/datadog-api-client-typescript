/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A named rule. It matches when every constraint it defines matches at least one identity in the client's certificate. It must define at least one of `common_names`, `dns_sans`, or `uri_sans`.
 */
export class ObservabilityPipelineClientIdentityRule {
  /**
   * Patterns for the certificate subject common name. Matching is case-sensitive, and `*` matches any characters, including dots.
   */
  "commonNames"?: Array<string>;
  /**
   * Patterns for DNS subject alternative names. Matching is case-insensitive, and `*` matches any characters within one DNS label.
   */
  "dnsSans"?: Array<string>;
  /**
   * Unique rule name, reported in metrics.
   */
  "name": string;
  /**
   * Patterns for URI subject alternative names. Matching is case-sensitive. `*` matches any characters within one path segment, and a trailing `/**` matches the path and everything below it. Wildcards are only supported in the path.
   */
  "uriSans"?: Array<string>;

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
    commonNames: {
      baseName: "common_names",
      type: "Array<string>",
    },
    dnsSans: {
      baseName: "dns_sans",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    uriSans: {
      baseName: "uri_sans",
      type: "Array<string>",
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
    return ObservabilityPipelineClientIdentityRule.attributeTypeMap;
  }

  public constructor() {}
}
