import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatuspageSubscriptionDataAttributesResponse } from "./IncidentStatuspageSubscriptionDataAttributesResponse";
import { IncidentStatuspageSubscriptionType } from "./IncidentStatuspageSubscriptionType";

/**
 * Email subscription data in a response.
 */
export class IncidentStatuspageSubscriptionDataResponse {
  /**
   * Attributes of an email subscription.
   */
  "attributes": IncidentStatuspageSubscriptionDataAttributesResponse;
  /**
   * The subscription identifier.
   */
  "id": string;
  /**
   * Statuspage email subscription resource type.
   */
  "type": IncidentStatuspageSubscriptionType;
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
      type: "IncidentStatuspageSubscriptionDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentStatuspageSubscriptionType",
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
    return IncidentStatuspageSubscriptionDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
