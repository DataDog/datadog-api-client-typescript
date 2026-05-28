import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToServiceAccountData } from "./RelationshipToServiceAccountData";

/**
 * Relationship to service account.
 */
export class RelationshipToServiceAccount {
  /**
   * Relationship to service account object.
   */
  "data": RelationshipToServiceAccountData;
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
      type: "RelationshipToServiceAccountData",
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
    return RelationshipToServiceAccount.attributeTypeMap;
  }

  public constructor() {}
}
