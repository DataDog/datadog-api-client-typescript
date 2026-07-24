/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluencePostmortemSettings } from "./ConfluencePostmortemSettings";
import { GoogleDocsPostmortemSettings } from "./GoogleDocsPostmortemSettings";
import { PostmortemTemplateLocation } from "./PostmortemTemplateLocation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a postmortem template.
 */
export class PostmortemTemplateAttributesRequest {
  /**
   * Settings for a postmortem template stored in Confluence. Required when `location` is `confluence`.
   */
  "confluencePostmortemSettings"?: ConfluencePostmortemSettings;
  /**
   * The templated content of the postmortem, supporting Markdown and incident template variables.
   */
  "content"?: string;
  /**
   * Settings for a postmortem template stored in Google Docs. Required when `location` is `google_docs`.
   */
  "googleDocsPostmortemSettings"?: GoogleDocsPostmortemSettings;
  /**
   * When set, marks this template as a default. The effective default for an incident type is the template with the most recent `is_default` timestamp. Set to `null` to unset.
   */
  "isDefault"?: Date;
  /**
   * The location where the postmortem is created and stored.
   */
  "location"?: PostmortemTemplateLocation;
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
    },
    googleDocsPostmortemSettings: {
      baseName: "google_docs_postmortem_settings",
      type: "GoogleDocsPostmortemSettings",
    },
    isDefault: {
      baseName: "is_default",
      type: "Date",
      format: "date-time",
    },
    location: {
      baseName: "location",
      type: "PostmortemTemplateLocation",
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
    return PostmortemTemplateAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
