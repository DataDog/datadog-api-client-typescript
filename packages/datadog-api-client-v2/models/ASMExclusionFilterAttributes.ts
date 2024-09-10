/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ASMExclusionFilterMetadata } from "./ASMExclusionFilterMetadata";
import { ASMExclusionFilterRuleTarget } from "./ASMExclusionFilterRuleTarget";
import { ASMExclusionFilterScope } from "./ASMExclusionFilterScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of the ASM WAF exclusion filter.
 */
export class ASMExclusionFilterAttributes {
  /**
   * A description for the exclusion filter.
   */
  "description"?: string;
  /**
   * Indicates whether the exclusion filter is enabled.
   */
  "enabled"?: boolean;
  /**
   * The IPs list for the exclusion filter.
   */
  "ipList"?: Array<string>;
  /**
   * Metadata about the exclusion filter.
   */
  "metadata"?: ASMExclusionFilterMetadata;
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
    metadata: {
      baseName: "metadata",
      type: "ASMExclusionFilterMetadata",
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
    return ASMExclusionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
