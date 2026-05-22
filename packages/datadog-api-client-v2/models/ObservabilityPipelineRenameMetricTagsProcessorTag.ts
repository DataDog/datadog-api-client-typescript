/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines how to rename a tag on metric events.
 */
export class ObservabilityPipelineRenameMetricTagsProcessorTag {
  /**
   * The new tag key to assign in place of the original.
   */
  "renameTo": string;
  /**
   * The original tag key on the metric event.
   */
  "tag": string;

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
    renameTo: {
      baseName: "rename_to",
      type: "string",
      required: true,
    },
    tag: {
      baseName: "tag",
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
    return ObservabilityPipelineRenameMetricTagsProcessorTag.attributeTypeMap;
  }

  public constructor() {}
}
