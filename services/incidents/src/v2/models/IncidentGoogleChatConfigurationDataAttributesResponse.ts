import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a Google Chat configuration.
 */
export class IncidentGoogleChatConfigurationDataAttributesResponse {
  /**
   * Timestamp when the configuration was created.
   */
  "createdAt": Date;
  /**
   * The Google Chat domain ID.
   */
  "domainId": string;
  /**
   * Timestamp when the configuration was last modified.
   */
  "modifiedAt": Date;
  /**
   * The template for the Google Chat space name.
   */
  "spaceNameTemplate": string;
  /**
   * The target audience ID for the Google Chat space.
   */
  "spaceTargetAudienceId": string;
  /**
   * The time zone for the Google Chat space.
   */
  "spaceTimeZone": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    domainId: {
      baseName: "domain_id",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    spaceNameTemplate: {
      baseName: "space_name_template",
      type: "string",
      required: true,
    },
    spaceTargetAudienceId: {
      baseName: "space_target_audience_id",
      type: "string",
      required: true,
    },
    spaceTimeZone: {
      baseName: "space_time_zone",
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
    return IncidentGoogleChatConfigurationDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
