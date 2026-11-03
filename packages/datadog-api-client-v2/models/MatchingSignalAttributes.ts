/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a matching security signal.
 */
export class MatchingSignalAttributes {
  /**
   * The tracker ID linking the signal back to the originating event. Distinct from `id`, which identifies the matching signal itself.
   */
  "eventTrackerId": string;
  /**
   * The severity of the signal.
   */
  "severity": string;
  /**
   * The title of the signal.
   */
  "title": string;
  /**
   * The Unix timestamp (in milliseconds) at which the signal was triggered.
   */
  "triggerTimeMs": number;

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
    eventTrackerId: {
      baseName: "event_tracker_id",
      type: "string",
      required: true,
    },
    severity: {
      baseName: "severity",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    triggerTimeMs: {
      baseName: "trigger_time_ms",
      type: "number",
      required: true,
      format: "int64",
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
    return MatchingSignalAttributes.attributeTypeMap;
  }

  public constructor() {}
}
