/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityExclusionFilterOnMatch } from "./ApplicationSecurityExclusionFilterOnMatch";
import { ApplicationSecurityExclusionFilterRulesTarget } from "./ApplicationSecurityExclusionFilterRulesTarget";
import { ApplicationSecurityExclusionFilterScope } from "./ApplicationSecurityExclusionFilterScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing an Application Security exclusion filter.
 */
export class ApplicationSecurityExclusionFilterAttributes {
  /**
   * A description for the exclusion filter.
   */
  "description": string;
  /**
   * Indicates whether the exclusion filter is enabled.
   */
  "enabled": boolean;
  /**
   * The event query matched by the legacy exclusion filter.
   */
  "eventQuery"?: string;
  /**
   * The client IP addresses matched by the exclusion filter (CIDR notation is supported).
   */
  "ipList"?: Array<string>;
  /**
   * The action taken when the exclusion filter matches. When set to `monitor`, security traces are emitted but the requests are not blocked. By default, security traces are not emitted and the requests are not blocked.
   */
  "onMatch"?: ApplicationSecurityExclusionFilterOnMatch;
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
  "rulesTarget"?: Array<ApplicationSecurityExclusionFilterRulesTarget>;
  /**
   * The services where the exclusion filter is deployed.
   */
  "scope"?: Array<ApplicationSecurityExclusionFilterScope>;

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
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    eventQuery: {
      baseName: "event_query",
      type: "string",
    },
    ipList: {
      baseName: "ip_list",
      type: "Array<string>",
    },
    onMatch: {
      baseName: "on_match",
      type: "ApplicationSecurityExclusionFilterOnMatch",
    },
    parameters: {
      baseName: "parameters",
      type: "Array<string>",
    },
    pathGlob: {
      baseName: "path_glob",
      type: "string",
    },
    rulesTarget: {
      baseName: "rules_target",
      type: "Array<ApplicationSecurityExclusionFilterRulesTarget>",
    },
    scope: {
      baseName: "scope",
      type: "Array<ApplicationSecurityExclusionFilterScope>",
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
    return ApplicationSecurityExclusionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
