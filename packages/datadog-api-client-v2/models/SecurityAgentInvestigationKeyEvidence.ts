/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A piece of evidence the verdict rests on.
 */
export class SecurityAgentInvestigationKeyEvidence {
  /**
   * Category of the evidence.
   */
  "category": string;
  /**
   * What the investigation found.
   */
  "finding": string;
  /**
   * Names of the steps the evidence comes from.
   */
  "sourceSteps"?: Array<string>;

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
    finding: {
      baseName: "finding",
      type: "string",
      required: true,
    },
    sourceSteps: {
      baseName: "source_steps",
      type: "Array<string>",
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
    return SecurityAgentInvestigationKeyEvidence.attributeTypeMap;
  }

  public constructor() {}
}
