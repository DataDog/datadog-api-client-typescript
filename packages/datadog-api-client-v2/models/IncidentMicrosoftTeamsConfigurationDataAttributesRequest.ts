/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a Microsoft Teams configuration.
 */
export class IncidentMicrosoftTeamsConfigurationDataAttributesRequest {
  /**
   * Whether manual meeting creation is enabled.
   */
  "manualMeetingCreation"?: boolean;
  /**
   * Whether post-meeting summary is enabled.
   */
  "postMeetingSummary"?: boolean;

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
    manualMeetingCreation: {
      baseName: "manual_meeting_creation",
      type: "boolean",
    },
    postMeetingSummary: {
      baseName: "post_meeting_summary",
      type: "boolean",
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
    return IncidentMicrosoftTeamsConfigurationDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
