/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineParseGrokProcessorRule } from "./ObservabilityPipelineParseGrokProcessorRule";
import { ObservabilityPipelineParseGrokProcessorType } from "./ObservabilityPipelineParseGrokProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `parse_grok` processor extracts structured fields from unstructured log messages using Grok patterns.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineParseGrokProcessor {
  /**
   * If set to `true`, disables the default Grok rules provided by Datadog.
   */
  "disableLibraryRules"?: boolean;
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Indicates whether the processor is enabled.
   */
  "enabled": boolean;
  /**
   * A unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * The list of Grok parsing rules. If multiple matching rules are provided, they are evaluated in order. The first successful match is applied.
   */
  "rules": Array<ObservabilityPipelineParseGrokProcessorRule>;
  /**
   * The processor type. The value should always be `parse_grok`.
   */
  "type": ObservabilityPipelineParseGrokProcessorType;

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
    disableLibraryRules: {
      baseName: "disable_library_rules",
      type: "boolean",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<ObservabilityPipelineParseGrokProcessorRule>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineParseGrokProcessorType",
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
    return ObservabilityPipelineParseGrokProcessor.attributeTypeMap;
  }

  public constructor() {}
}
