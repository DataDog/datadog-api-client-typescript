/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Severity } from "./Severity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Vulnerability EPSS severity.
 */
export class EPSS {
  /**
   * Vulnerability EPSS severity score.
   */
  "score": number;
  /**
   * The vulnerability severity.
   */
  "severity": Severity;

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
      type: "Severity",
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
    return EPSS.attributeTypeMap;
  }

  public constructor() {}
}
