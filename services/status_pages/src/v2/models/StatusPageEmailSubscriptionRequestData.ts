import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailSubscriptionRequestAttributes } from "./StatusPageEmailSubscriptionRequestAttributes";
import { StatusPageEmailSubscriptionRequestRelationships } from "./StatusPageEmailSubscriptionRequestRelationships";
import { StatusPageEmailSubscriptionType } from "./StatusPageEmailSubscriptionType";

/**
 * Email subscription data for a request.
 */
export class StatusPageEmailSubscriptionRequestData {
  /**
   * The email subscription attributes for a request.
   */
  "attributes": StatusPageEmailSubscriptionRequestAttributes;
  /**
   * The email subscription relationships for a request.
   */
  "relationships"?: StatusPageEmailSubscriptionRequestRelationships;
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
      type: "StatusPageEmailSubscriptionRequestAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPageEmailSubscriptionRequestRelationships",
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
    return StatusPageEmailSubscriptionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
