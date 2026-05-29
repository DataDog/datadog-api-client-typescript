import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccountType } from "./ServiceAccountType";

/**
 * Relationship to service account object.
 */
export class RelationshipToServiceAccountData {
  /**
   * A unique identifier that represents the service account.
   */
  "id": string;
  /**
   * Service account resource type.
   */
  "type": ServiceAccountType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceAccountType",
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
    return RelationshipToServiceAccountData.attributeTypeMap;
  }

  public constructor() {}
}
