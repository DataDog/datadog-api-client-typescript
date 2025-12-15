/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a single VRL remap rule with its own filtering and transformation logic.
 */
export class ObservabilityPipelineCustomProcessorRemap {
  /**
   * Whether to drop events that caused errors during processing.
   */
  "dropOnError": boolean;
  /**
   * Whether this remap rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * A Datadog search query used to filter events for this specific remap rule.
   */
  "include": string;
  /**
   * A descriptive name for this remap rule.
   */
  "name": string;
  /**
   * The VRL script source code that defines the processing logic.
   */
  "source": string;

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
    dropOnError: {
      baseName: "drop_on_error",
      type: "boolean",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
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
    return ObservabilityPipelineCustomProcessorRemap.attributeTypeMap;
  }

  public constructor() {}
}
