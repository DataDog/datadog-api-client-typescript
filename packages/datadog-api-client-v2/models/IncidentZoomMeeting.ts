/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Zoom meeting associated with an incident.
 */
export class IncidentZoomMeeting {
  /**
   * The Zoom host identifier.
   */
  "hostId"?: string;
  /**
   * The URL to join the meeting.
   */
  "joinUrl": string;
  /**
   * The Zoom meeting identifier.
   */
  "meetingId": number;
  /**
   * The meeting password.
   */
  "password"?: string;
  /**
   * The URL of the meeting recording.
   */
  "recordingUrl"?: string;

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
    hostId: {
      baseName: "host_id",
      type: "string",
    },
    joinUrl: {
      baseName: "join_url",
      type: "string",
      required: true,
    },
    meetingId: {
      baseName: "meeting_id",
      type: "number",
      required: true,
      format: "int64",
    },
    password: {
      baseName: "password",
      type: "string",
    },
    recordingUrl: {
      baseName: "recording_url",
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
    return IncidentZoomMeeting.attributeTypeMap;
  }

  public constructor() {}
}
