/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineClientIdentityRule } from "./ObservabilityPipelineClientIdentityRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An allowlist of client identities. A client is allowed when any rule matches.
 */
export class ObservabilityPipelineClientIdentityAllowlist {
  /**
   * Rules, evaluated in order. The first matching rule is the one reported in metrics.
   */
  "rules": Array<ObservabilityPipelineClientIdentityRule>;

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
    rules: {
      baseName: "rules",
      type: "Array<ObservabilityPipelineClientIdentityRule>",
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
    return ObservabilityPipelineClientIdentityAllowlist.attributeTypeMap;
  }

  public constructor() {}
}
