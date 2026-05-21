import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Incident data related to a PagerDuty incident.
 */
export class IncidentPagerdutyIncidentDataResponse {
  /**
   * The Datadog incident identifier.
   */
  "id": string;
  /**
   * The incident resource type.
   */
  "type": string;
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
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return IncidentPagerdutyIncidentDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
