import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Findings } from "./Findings";

/**
 * Relationships detaching security findings from their case.
 */
export class DetachCaseRequestDataRelationships {
  /**
   * A list of security findings.
   */
  "findings": Findings;
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
    findings: {
      baseName: "findings",
      type: "Findings",
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
    return DetachCaseRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
