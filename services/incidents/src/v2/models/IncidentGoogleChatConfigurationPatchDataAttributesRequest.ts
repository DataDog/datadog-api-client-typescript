import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for patching a Google Chat configuration. All fields are optional.
 */
export class IncidentGoogleChatConfigurationPatchDataAttributesRequest {
  /**
   * The Google Chat domain ID.
   */
  "domainId"?: string;
  /**
   * The template for the Google Chat space name.
   */
  "spaceNameTemplate"?: string;
  /**
   * The target audience ID for the Google Chat space.
   */
  "spaceTargetAudienceId"?: string;
  /**
   * The time zone for the Google Chat space.
   */
  "spaceTimeZone"?: string;
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
    domainId: {
      baseName: "domain_id",
      type: "string",
    },
    spaceNameTemplate: {
      baseName: "space_name_template",
      type: "string",
    },
    spaceTargetAudienceId: {
      baseName: "space_target_audience_id",
      type: "string",
    },
    spaceTimeZone: {
      baseName: "space_time_zone",
      type: "string",
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
    return IncidentGoogleChatConfigurationPatchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
