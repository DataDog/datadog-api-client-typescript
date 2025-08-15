/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { VulnerabilitySeverity } from "./VulnerabilitySeverity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Vulnerability severity.
 */
export class CVSS {
  /**
   * Vulnerability severity score.
   */
  "score": number;
  /**
   * The vulnerability severity.
   */
  "severity": VulnerabilitySeverity;
  /**
   * Vulnerability CVSS vector.
   */
  "vector": string;

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
    score: {
      baseName: "score",
      type: "number",
      required: true,
      format: "double",
    },
    severity: {
      baseName: "severity",
      type: "VulnerabilitySeverity",
      required: true,
    },
    vector: {
      baseName: "vector",
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
    return CVSS.attributeTypeMap;
  }

  public constructor() {}
}
