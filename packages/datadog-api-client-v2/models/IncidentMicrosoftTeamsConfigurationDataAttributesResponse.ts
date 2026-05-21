/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Microsoft Teams configuration.
 */
export class IncidentMicrosoftTeamsConfigurationDataAttributesResponse {
  /**
   * Timestamp when the configuration was created.
   */
  "createdAt": Date;
  /**
   * Whether manual meeting creation is enabled.
   */
  "manualMeetingCreation": boolean;
  /**
   * Timestamp when the configuration was last modified.
   */
  "modifiedAt": Date;
  /**
   * Whether post-meeting summary is enabled.
   */
  "postMeetingSummary": boolean;

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
    manualMeetingCreation: {
      baseName: "manual_meeting_creation",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    postMeetingSummary: {
      baseName: "post_meeting_summary",
      type: "boolean",
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
    return IncidentMicrosoftTeamsConfigurationDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
