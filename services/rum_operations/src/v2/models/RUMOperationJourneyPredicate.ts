import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single predicate within a composite rule, matching RUM events with a query.
 */
export class RUMOperationJourneyPredicate {
  /**
   * The RUM search query used to match events for this predicate.
   */
  "query": string;
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
    query: {
      baseName: "query",
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
    return RUMOperationJourneyPredicate.attributeTypeMap;
  }

  public constructor() {}
}
