import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityWafExclusionFilterMetadata } from "./ApplicationSecurityWafExclusionFilterMetadata";
import { ApplicationSecurityWafExclusionFilterOnMatch } from "./ApplicationSecurityWafExclusionFilterOnMatch";
import { ApplicationSecurityWafExclusionFilterRulesTarget } from "./ApplicationSecurityWafExclusionFilterRulesTarget";
import { ApplicationSecurityWafExclusionFilterScope } from "./ApplicationSecurityWafExclusionFilterScope";

/**
 * Attributes describing a WAF exclusion filter.
 */
export class ApplicationSecurityWafExclusionFilterAttributes {
  /**
   * A description for the exclusion filter.
   */
  "description"?: string;
  /**
   * Indicates whether the exclusion filter is enabled.
   */
  "enabled"?: boolean;
  /**
   * The event query matched by the legacy exclusion filter. Cannot be created nor updated.
   */
  "eventQuery"?: string;
  /**
   * The client IP addresses matched by the exclusion filter (CIDR notation is supported).
   */
  "ipList"?: Array<string>;
  /**
   * Extra information about the exclusion filter.
   */
  "metadata"?: ApplicationSecurityWafExclusionFilterMetadata;
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
   * Generated event search query for traces matching the exclusion filter.
   */
  "searchQuery"?: string;
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
    eventQuery: {
      baseName: "event_query",
      type: "string",
    },
    ipList: {
      baseName: "ip_list",
      type: "Array<string>",
    },
    metadata: {
      baseName: "metadata",
      type: "ApplicationSecurityWafExclusionFilterMetadata",
    },
    onMatch: {
      baseName: "on_match",
      type: "ApplicationSecurityWafExclusionFilterOnMatch",
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
      type: "Array<ApplicationSecurityWafExclusionFilterRulesTarget>",
    },
    scope: {
      baseName: "scope",
      type: "Array<ApplicationSecurityWafExclusionFilterScope>",
    },
    searchQuery: {
      baseName: "search_query",
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
    return ApplicationSecurityWafExclusionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
