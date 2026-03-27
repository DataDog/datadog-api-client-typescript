/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestVersionDiffPatchDiff } from "./SyntheticsTestVersionDiffPatchDiff";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing a patch in the diff.
 */
export class SyntheticsTestVersionDiffPatches {
  /**
   * List of individual diff operations.
   */
  "diffs"?: Array<SyntheticsTestVersionDiffPatchDiff>;
  /**
   * Length of the original text segment.
   */
  "length1"?: number;
  /**
   * Length of the modified text segment.
   */
  "length2"?: number;
  /**
   * Start position in the original text.
   */
  "start1"?: number;
  /**
   * Start position in the modified text.
   */
  "start2"?: number;

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
    diffs: {
      baseName: "diffs",
      type: "Array<SyntheticsTestVersionDiffPatchDiff>",
    },
    length1: {
      baseName: "length1",
      type: "number",
      format: "int64",
    },
    length2: {
      baseName: "length2",
      type: "number",
      format: "int64",
    },
    start1: {
      baseName: "start1",
      type: "number",
      format: "int64",
    },
    start2: {
      baseName: "start2",
      type: "number",
      format: "int64",
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
    return SyntheticsTestVersionDiffPatches.attributeTypeMap;
  }

  public constructor() {}
}
