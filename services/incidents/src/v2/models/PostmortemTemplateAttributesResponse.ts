import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluencePostmortemSettings } from "./ConfluencePostmortemSettings";
import { GoogleDocsPostmortemSettings } from "./GoogleDocsPostmortemSettings";
import { PostmortemTemplateLocation } from "./PostmortemTemplateLocation";

/**
 * Attributes of a postmortem template returned in a response.
 */
export class PostmortemTemplateAttributesResponse {
  /**
   * Settings for a postmortem template stored in Confluence. Required when `location` is `confluence`.
   */
  "confluencePostmortemSettings"?: ConfluencePostmortemSettings;
  /**
   * The templated content of the postmortem, supporting Markdown and incident template variables.
   */
  "content": string;
  /**
   * When the template was created.
   */
  "createdAt": Date;
  /**
   * Settings for a postmortem template stored in Google Docs. Required when `location` is `google_docs`.
   */
  "googleDocsPostmortemSettings"?: GoogleDocsPostmortemSettings;
  /**
   * When set, marks this template as a default. The effective default for an incident type is the template with the most recent `is_default` timestamp.
   */
  "isDefault": Date | null;
  /**
   * The location where the postmortem is created and stored.
   */
  "location": PostmortemTemplateLocation;
  /**
   * When the template was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the template.
   */
  "name": string;
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
    confluencePostmortemSettings: {
      baseName: "confluence_postmortem_settings",
      type: "ConfluencePostmortemSettings",
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    googleDocsPostmortemSettings: {
      baseName: "google_docs_postmortem_settings",
      type: "GoogleDocsPostmortemSettings",
    },
    isDefault: {
      baseName: "is_default",
      type: "Date",
      required: true,
      format: "date-time",
    },
    location: {
      baseName: "location",
      type: "PostmortemTemplateLocation",
      required: true,
    },
    modifiedAt: {
      baseName: "modifiedAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
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
    return PostmortemTemplateAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
