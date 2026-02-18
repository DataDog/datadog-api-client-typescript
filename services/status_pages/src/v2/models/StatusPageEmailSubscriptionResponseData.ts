import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailSubscriptionResponseAttributes } from "./StatusPageEmailSubscriptionResponseAttributes";
import { StatusPageEmailSubscriptionResponseRelationships } from "./StatusPageEmailSubscriptionResponseRelationships";
import { StatusPageEmailSubscriptionType } from "./StatusPageEmailSubscriptionType";

/**
 * Email subscription data from a response.
 */
export class StatusPageEmailSubscriptionResponseData {
  /**
   * The email subscription attributes from a response.
   */
  "attributes": StatusPageEmailSubscriptionResponseAttributes;
  /**
   * The email subscription ID.
   */
  "id": string;
  /**
   * The email subscription relationships from a response.
   */
  "relationships": StatusPageEmailSubscriptionResponseRelationships;
  /**
   * Status page email subscription resource type.
   */
  "type": StatusPageEmailSubscriptionType;
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
    attributes: {
      baseName: "attributes",
      type: "StatusPageEmailSubscriptionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPageEmailSubscriptionResponseRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatusPageEmailSubscriptionType",
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
    return StatusPageEmailSubscriptionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
