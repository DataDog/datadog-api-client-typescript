/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityWafExclusionFilterOnMatch } from "./ApplicationSecurityWafExclusionFilterOnMatch";
import { ApplicationSecurityWafExclusionFilterRulesTarget } from "./ApplicationSecurityWafExclusionFilterRulesTarget";
import { ApplicationSecurityWafExclusionFilterScope } from "./ApplicationSecurityWafExclusionFilterScope";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for updating a WAF exclusion filter.
*/
export class ApplicationSecurityWafExclusionFilterUpdateAttributes {
  /**
   * A description for the exclusion filter.
  */
  "description": string;
  /**
   * Indicates whether the exclusion filter is enabled.
  */
  "enabled": boolean;
  /**
   * The client IP addresses matched by the exclusion filter (CIDR notation is supported).
  */
  "ipList"?: Array<string>;
  /**
   * The action taken when the exclusion filter matches. When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.
  */
  "onMatch"?: ApplicationSecurityWafExclusionFilterOnMatch;
  /**
   * A list of parameters matched by the exclusion filter in the HTTP query string and HTTP request body. Nested parameters can be matched by joining fields with a dot character.
  */
  "parameters"?: Array<string>;
  /**
   * The HTTP path glob expression matched by the exclusion filter.
  */
  "pathGlob"?: string;
  /**
   * The WAF rules targeted by the exclusion filter.
  */
  "rulesTarget"?: Array<ApplicationSecurityWafExclusionFilterRulesTarget>;
  /**
   * The services where the exclusion filter is deployed.
  */
  "scope"?: Array<ApplicationSecurityWafExclusionFilterScope>;

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
    "description": {
      "baseName": "description",
      "type": "string",
      "required": true,
    },
    "enabled": {
      "baseName": "enabled",
      "type": "boolean",
      "required": true,
    },
    "ipList": {
      "baseName": "ip_list",
      "type": "Array<string>",
    },
    "onMatch": {
      "baseName": "on_match",
      "type": "ApplicationSecurityWafExclusionFilterOnMatch",
    },
    "parameters": {
      "baseName": "parameters",
      "type": "Array<string>",
    },
    "pathGlob": {
      "baseName": "path_glob",
      "type": "string",
    },
    "rulesTarget": {
      "baseName": "rules_target",
      "type": "Array<ApplicationSecurityWafExclusionFilterRulesTarget>",
    },
    "scope": {
      "baseName": "scope",
      "type": "Array<ApplicationSecurityWafExclusionFilterScope>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ApplicationSecurityWafExclusionFilterUpdateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









