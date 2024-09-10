/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ASMExclusionFilterRuleTarget } from "./ASMExclusionFilterRuleTarget";
import { ASMExclusionFilterScope } from "./ASMExclusionFilterScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update an existing ASM Exclusion filter.
 */
export class ASMExclusionFilterUpdateAttributes {
  /**
   * The description of the Exclusion filter.
   */
  "description"?: string;
  /**
   * Whether the Exclusion filter is enabled.
   */
  "enabled"?: boolean;
  /**
   * The IPs list for the exclusion filter.
   */
  "ipList"?: Array<string>;
  /**
   * The path glob for the exclusion filter.
   */
  "pathGlob"?: string;
  /**
   * A list of rules targeted by the exclusion filter.
   */
  "rulesTarget"?: Array<ASMExclusionFilterRuleTarget>;
  /**
   * The scope of the exclusion filter.
   */
  "scope"?: Array<ASMExclusionFilterScope>;

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
    description: {
      baseName: "description",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    ipList: {
      baseName: "ip_list",
      type: "Array<string>",
    },
    pathGlob: {
      baseName: "path_glob",
      type: "string",
    },
    rulesTarget: {
      baseName: "rules_target",
      type: "Array<ASMExclusionFilterRuleTarget>",
    },
    scope: {
      baseName: "scope",
      type: "Array<ASMExclusionFilterScope>",
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
    return ASMExclusionFilterUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
