import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatusPageNoticeIntegrationDataAttributes } from "./IncidentStatusPageNoticeIntegrationDataAttributes";
import { IncidentStatusPageNoticeIntegrationType } from "./IncidentStatusPageNoticeIntegrationType";

/**
 * Status page notice integration data in a response.
 */
export class IncidentStatusPageNoticeIntegrationDataResponse {
  /**
   * Attributes of a status page notice integration.
   */
  "attributes": IncidentStatusPageNoticeIntegrationDataAttributes;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Incident integration resource type.
   */
  "type": IncidentStatusPageNoticeIntegrationType;
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
      type: "IncidentStatusPageNoticeIntegrationDataAttributes",
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
      type: "IncidentStatusPageNoticeIntegrationType",
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
    return IncidentStatusPageNoticeIntegrationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
