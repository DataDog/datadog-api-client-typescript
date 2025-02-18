/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityExclusionFilterRulesTargetTags } from "./ApplicationSecurityExclusionFilterRulesTargetTags";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Target WAF rules based either on an identifier or tags.
 */
export class ApplicationSecurityExclusionFilterRulesTarget {
  /**
   * Target a single WAF rule based on its identifier.
   */
  "ruleId"?: string;
  /**
   * Target multiple WAF rules based on their tags.
   */
  "tags"?: ApplicationSecurityExclusionFilterRulesTargetTags;

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
    ruleId: {
      baseName: "rule_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "ApplicationSecurityExclusionFilterRulesTargetTags",
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
    return ApplicationSecurityExclusionFilterRulesTarget.attributeTypeMap;
  }

  public constructor() {}
}
