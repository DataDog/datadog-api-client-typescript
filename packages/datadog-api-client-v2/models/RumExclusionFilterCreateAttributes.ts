/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumExclusionFilterEventType } from "./RumExclusionFilterEventType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of an exclusion filter to create.
 */
export class RumExclusionFilterCreateAttributes {
  /**
   * Whether the exclusion filter is active. Defaults to `true`.
   */
  "enabled"?: boolean;
  /**
   * The type of RUM events to filter on.
   */
  "eventType"?: RumExclusionFilterEventType;
  /**
   * The name of the exclusion filter.
   */
  "name": string;
  /**
   * Additional query used to further restrict which RUM events are excluded.
   * Combined with `event_type` when both are provided.
   */
  "query"?: string;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    eventType: {
      baseName: "event_type",
      type: "RumExclusionFilterEventType",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
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
    return RumExclusionFilterCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
