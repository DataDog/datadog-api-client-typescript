/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Google Meet configuration.
 */
export class IncidentGoogleMeetConfigurationDataAttributesResponse {
  /**
   * Whether manual meeting creation is allowed.
   */
  "allowManualMeetingCreation": boolean;
  /**
   * Whether meetings are auto-summarized.
   */
  "autoSummarize": boolean;
  /**
   * Timestamp when the configuration was created.
   */
  "createdAt"?: Date;
  /**
   * Timestamp when the configuration was last modified.
   */
  "modifiedAt": Date;

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
    allowManualMeetingCreation: {
      baseName: "allow_manual_meeting_creation",
      type: "boolean",
      required: true,
    },
    autoSummarize: {
      baseName: "auto_summarize",
      type: "boolean",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return IncidentGoogleMeetConfigurationDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
