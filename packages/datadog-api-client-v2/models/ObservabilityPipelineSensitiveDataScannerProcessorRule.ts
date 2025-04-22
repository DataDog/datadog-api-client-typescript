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
 * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorRule` object.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorRule {
  /**
   * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions` object.
   */
  "keywordOptions"?: ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions;
  /**
   * A name identifying the rule.
   */
  "name": string;
  /**
   * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorAction` object.
   */
  "onMatch": ObservabilityPipelineSensitiveDataScannerProcessorAction;
  /**
   * Pattern detection configuration for identifying sensitive data using either a custom regex or a library reference.
   */
  "pattern": ObservabilityPipelineSensitiveDataScannerProcessorPattern;
  /**
   * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorScope` object.
   */
  "scope": ObservabilityPipelineSensitiveDataScannerProcessorScope;
  /**
   * Tags assigned to this rule for filtering and classification.
   */
  "tags": Array<string>;

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
      required: true,
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
    return ObservabilityPipelineSensitiveDataScannerProcessorRule.attributeTypeMap;
  }

  public constructor() {}
}
