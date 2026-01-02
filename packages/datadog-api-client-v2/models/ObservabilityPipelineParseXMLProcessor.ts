/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineParseXMLProcessorType } from "./ObservabilityPipelineParseXMLProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `parse_xml` processor parses XML from a specified field and extracts it into the event.
 */
export class ObservabilityPipelineParseXMLProcessor {
  /**
   * Whether to always use a text key for element content.
   */
  "alwaysUseTextKey"?: boolean;
  /**
   * The prefix to use for XML attributes in the parsed output.
   */
  "attrPrefix"?: string;
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The name of the log field that contains an XML string.
   */
  "field": string;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * Whether to include XML attributes in the parsed output.
   */
  "includeAttr"?: boolean;
  /**
   * Whether to parse boolean values from strings.
   */
  "parseBool"?: boolean;
  /**
   * Whether to parse null values.
   */
  "parseNull"?: boolean;
  /**
   * Whether to parse numeric values from strings.
   */
  "parseNumber"?: boolean;
  /**
   * The key name to use for text content within XML elements. Must be at least 1 character if specified.
   */
  "textKey"?: string;
  /**
   * The processor type. The value should always be `parse_xml`.
   */
  "type": ObservabilityPipelineParseXMLProcessorType;

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
    alwaysUseTextKey: {
      baseName: "always_use_text_key",
      type: "boolean",
    },
    attrPrefix: {
      baseName: "attr_prefix",
      type: "string",
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
    field: {
      baseName: "field",
      type: "string",
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
    includeAttr: {
      baseName: "include_attr",
      type: "boolean",
    },
    parseBool: {
      baseName: "parse_bool",
      type: "boolean",
    },
    parseNull: {
      baseName: "parse_null",
      type: "boolean",
    },
    parseNumber: {
      baseName: "parse_number",
      type: "boolean",
    },
    textKey: {
      baseName: "text_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineParseXMLProcessorType",
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
    return ObservabilityPipelineParseXMLProcessor.attributeTypeMap;
  }

  public constructor() {}
}
