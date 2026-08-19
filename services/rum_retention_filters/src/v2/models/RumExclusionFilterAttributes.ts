import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumExclusionFilterEventType } from "./RumExclusionFilterEventType";

/**
 * The attributes of an exclusion filter.
 */
export class RumExclusionFilterAttributes {
  /**
   * Whether the exclusion filter is active.
   */
  "enabled"?: boolean;
  /**
   * The type of RUM events to filter on.
   */
  "eventType"?: RumExclusionFilterEventType;
  /**
   * The name of the exclusion filter.
   */
  "name"?: string;
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
    return RumExclusionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
