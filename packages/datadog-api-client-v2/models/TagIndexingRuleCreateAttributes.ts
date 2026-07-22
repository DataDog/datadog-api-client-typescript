/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagIndexingRuleOptions } from "./TagIndexingRuleOptions";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for creating a tag indexing rule.
*/
export class TagIndexingRuleCreateAttributes {
  /**
   * When true, the rule excludes the listed tags and indexes all others. When false (default), the rule includes only the listed tags.
  */
  "excludeTagsMode"?: boolean;
  /**
   * Metric name prefixes excluded from the rule's scope.
  */
  "ignoredMetricNameMatches"?: Array<string>;
  /**
   * Metric name prefixes (glob patterns) this rule applies to.
  */
  "metricNameMatches": Array<string>;
  /**
   * Human-readable name for the rule.
  */
  "name": string;
  /**
   * Versioned configuration options for a tag indexing rule.
  */
  "options"?: TagIndexingRuleOptions;
  /**
   * Tag keys managed by this rule.
  */
  "tags"?: Array<string>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "excludeTagsMode": {
      "baseName": "exclude_tags_mode",
      "type": "boolean",
    },
    "ignoredMetricNameMatches": {
      "baseName": "ignored_metric_name_matches",
      "type": "Array<string>",
    },
    "metricNameMatches": {
      "baseName": "metric_name_matches",
      "type": "Array<string>",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "options": {
      "baseName": "options",
      "type": "TagIndexingRuleOptions",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
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




    return TagIndexingRuleCreateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









