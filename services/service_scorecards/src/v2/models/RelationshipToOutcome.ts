import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToOutcomeData } from "./RelationshipToOutcomeData";

/**
 * The JSON:API relationship to a scorecard outcome.
 */
export class RelationshipToOutcome {
  /**
   * The JSON:API relationship to an outcome, which returns the related rule id.
   */
  "data"?: RelationshipToOutcomeData;
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
    data: {
      baseName: "data",
      type: "RelationshipToOutcomeData",
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
    return RelationshipToOutcome.attributeTypeMap;
  }

  public constructor() {}
}
