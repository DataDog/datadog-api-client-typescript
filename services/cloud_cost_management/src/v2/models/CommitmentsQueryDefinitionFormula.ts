import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A formula of a query definition.
 */
export class CommitmentsQueryDefinitionFormula {
  /**
   * The formula expression over the named queries.
   */
  "formula": string;
  /**
   * The name of the response value the formula produces.
   */
  "id": string;
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
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
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
    return CommitmentsQueryDefinitionFormula.attributeTypeMap;
  }

  public constructor() {}
}
