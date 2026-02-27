/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorAction } from "./ObservabilityPipelineSensitiveDataScannerProcessorAction";
import { ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorPattern } from "./ObservabilityPipelineSensitiveDataScannerProcessorPattern";
import { ObservabilityPipelineSensitiveDataScannerProcessorScope } from "./ObservabilityPipelineSensitiveDataScannerProcessorScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a rule for detecting sensitive data, including matching pattern, scope, and the action to take.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorRule {
  /**
   * Configuration for keywords used to reinforce sensitive data pattern detection.
   */
  "keywordOptions"?: ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions;
  /**
   * A name identifying the rule.
   */
  "name": string;
  /**
   * Defines what action to take when sensitive data is matched.
   */
  "onMatch": ObservabilityPipelineSensitiveDataScannerProcessorAction;
  /**
   * Pattern detection configuration for identifying sensitive data using either a custom regex or a library reference.
   */
  "pattern": ObservabilityPipelineSensitiveDataScannerProcessorPattern;
  /**
   * Determines which parts of the log the pattern-matching rule should be applied to.
   */
  "scope": ObservabilityPipelineSensitiveDataScannerProcessorScope;
  /**
   * Optional tags assigned to this rule for filtering and classification.
   */
  "tags"?: Array<string>;

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
    keywordOptions: {
      baseName: "keyword_options",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    onMatch: {
      baseName: "on_match",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorAction",
      required: true,
    },
    pattern: {
      baseName: "pattern",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorPattern",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScope",
      required: true,
    },
    tags: {
      baseName: "tags",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorRule.attributeTypeMap;
  }

  public constructor() {}
}
