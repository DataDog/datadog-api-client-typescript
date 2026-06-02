/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the sampling quality for a signals and problems query.
 */
export class SignalsProblemsSampleMetadata {
  /**
   * Number of view instances that failed to process.
   */
  "failed": number;
  /**
   * Number of view instances requested for sampling.
   */
  "requested": number;
  /**
   * List of RUM view IDs that were sampled.
   */
  "sampledViewIds": Array<string>;
  /**
   * Number of view instances successfully processed.
   */
  "succeeded": number;
  /**
   * Ratio of successfully processed views to requested views.
   */
  "successRate": number;

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
    failed: {
      baseName: "failed",
      type: "number",
      required: true,
      format: "int32",
    },
    requested: {
      baseName: "requested",
      type: "number",
      required: true,
      format: "int32",
    },
    sampledViewIds: {
      baseName: "sampled_view_ids",
      type: "Array<string>",
      required: true,
    },
    succeeded: {
      baseName: "succeeded",
      type: "number",
      required: true,
      format: "int32",
    },
    successRate: {
      baseName: "success_rate",
      type: "number",
      required: true,
      format: "double",
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
    return SignalsProblemsSampleMetadata.attributeTypeMap;
  }

  public constructor() {}
}
