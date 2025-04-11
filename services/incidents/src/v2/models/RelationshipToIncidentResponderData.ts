import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRespondersType } from "./IncidentRespondersType";

/**
 * Relationship to impact object.
 */
export class RelationshipToIncidentResponderData {
  /**
   * A unique identifier that represents the responder.
   */
  "id": string;
  /**
   * The incident responders type.
   */
  "type": IncidentRespondersType;
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
      type: "IncidentRespondersType",
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
    return RelationshipToIncidentResponderData.attributeTypeMap;
  }

  public constructor() {}
}
