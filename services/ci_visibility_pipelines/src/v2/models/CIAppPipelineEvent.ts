import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppPipelineEventAttributes } from "./CIAppPipelineEventAttributes";
import { CIAppPipelineEventTypeName } from "./CIAppPipelineEventTypeName";

/**
 * Object description of a pipeline event after being processed and stored by Datadog.
 */
export class CIAppPipelineEvent {
  /**
   * JSON object containing all event attributes and their associated values.
   */
  "attributes"?: CIAppPipelineEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: CIAppPipelineEventTypeName;
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
    attributes: {
      baseName: "attributes",
      type: "CIAppPipelineEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CIAppPipelineEventTypeName",
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
    return CIAppPipelineEvent.attributeTypeMap;
  }

  public constructor() {}
}
