/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AI-generated analysis details for a replay issue.
 */
export class ReplayAnalysisLLMDetails {
  /**
   * Interpreted user intent derived from session analysis.
   */
  "intent": string;
  /**
   * List of user behavior steps observed in the session.
   */
  "userPattern": Array<string>;

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
    intent: {
      baseName: "intent",
      type: "string",
      required: true,
    },
    userPattern: {
      baseName: "user_pattern",
      type: "Array<string>",
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
    return ReplayAnalysisLLMDetails.attributeTypeMap;
  }

  public constructor() {}
}
