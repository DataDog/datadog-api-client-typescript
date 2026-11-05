/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationCount } from "./SecurityAgentInvestigationCount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The counts of each value of the field.
 */
export class SecurityAgentInvestigationCountsAttributes {
  /**
   * One bucket per value, sorted by ascending count.
   */
  "counts": Array<SecurityAgentInvestigationCount>;

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
    counts: {
      baseName: "counts",
      type: "Array<SecurityAgentInvestigationCount>",
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
    return SecurityAgentInvestigationCountsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
