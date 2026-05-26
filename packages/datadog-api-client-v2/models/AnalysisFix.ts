/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnalysisEdit } from "./AnalysisEdit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A fix suggestion for a rule violation, consisting of one or more edit operations.
 */
export class AnalysisFix {
  /**
   * A human-readable description of what the fix does.
   */
  "description": string;
  /**
   * The list of edit operations that constitute the fix.
   */
  "edits": Array<AnalysisEdit>;

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
      required: true,
    },
    edits: {
      baseName: "edits",
      type: "Array<AnalysisEdit>",
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
    return AnalysisFix.attributeTypeMap;
  }

  public constructor() {}
}
