import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToLeakedKey } from "./RelationshipToLeakedKey";
import { RelationshipToServiceAccount } from "./RelationshipToServiceAccount";

/**
 * Resources related to the access token.
 */
export class ServiceAccessTokenRelationships {
  /**
   * Relationship to the leak the access token was found in. `data` is null when the access token has not been detected as leaked.
   */
  "leakInformation"?: RelationshipToLeakedKey;
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
    leakInformation: {
      baseName: "leak_information",
      type: "RelationshipToLeakedKey",
    },
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
