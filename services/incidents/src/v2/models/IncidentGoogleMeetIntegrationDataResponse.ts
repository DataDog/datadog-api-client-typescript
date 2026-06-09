import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleMeetIntegrationDataAttributes } from "./IncidentGoogleMeetIntegrationDataAttributes";
import { IncidentGoogleMeetIntegrationType } from "./IncidentGoogleMeetIntegrationType";

/**
 * Google Meet integration data in a response.
 */
export class IncidentGoogleMeetIntegrationDataResponse {
  /**
   * Attributes of a Google Meet integration metadata.
   */
  "attributes": IncidentGoogleMeetIntegrationDataAttributes;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Incident integration resource type.
   */
  "type": IncidentGoogleMeetIntegrationType;
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
      type: "IncidentGoogleMeetIntegrationDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentGoogleMeetIntegrationType",
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
    return IncidentGoogleMeetIntegrationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
