import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToServiceAccount } from "./RelationshipToServiceAccount";

/**
 * Resources related to the access token.
 */
export class ServiceAccessTokenRelationships {
  /**
   * Relationship to service account.
   */
  "ownedBy"?: RelationshipToServiceAccount;
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
    ownedBy: {
      baseName: "owned_by",
      type: "RelationshipToServiceAccount",
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
    return ServiceAccessTokenRelationships.attributeTypeMap;
  }

  public constructor() {}
}
