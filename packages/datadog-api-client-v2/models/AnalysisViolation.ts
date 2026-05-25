/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnalysisFix } from "./AnalysisFix";
import { AnalysisPosition } from "./AnalysisPosition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A rule violation found in the analyzed source code.
 */
export class AnalysisViolation {
  /**
   * The category of the violation.
   */
  "category": string;
  /**
   * A position in source code, identified by line and column numbers.
   */
  "end": AnalysisPosition;
  /**
   * The list of suggested fixes for this violation.
   */
  "fixes": Array<AnalysisFix>;
  /**
   * A human-readable description of the violation.
   */
  "message": string;
  /**
   * The severity level of the violation.
   */
  "severity": string;
  /**
   * A position in source code, identified by line and column numbers.
   */
  "start": AnalysisPosition;

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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    end: {
      baseName: "end",
      type: "AnalysisPosition",
      required: true,
    },
    fixes: {
      baseName: "fixes",
      type: "Array<AnalysisFix>",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    severity: {
      baseName: "severity",
      type: "string",
      required: true,
    },
    start: {
      baseName: "start",
      type: "AnalysisPosition",
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
    return AnalysisViolation.attributeTypeMap;
  }

  public constructor() {}
}
