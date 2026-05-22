import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes containing the entities related to the signal.
 */
export class SignalEntitiesAttributes {
  /**
   * The identity entities related to the signal. Each item is a free-form object describing an identity (for example, a user or principal).
   */
  "identities": Array<{ [key: string]: any }>;
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
    identities: {
      baseName: "identities",
      type: "Array<{ [key: string]: any; }>",
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
    return SignalEntitiesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
