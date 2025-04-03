import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppCreatePipelineEventRequestAttributes } from "./CIAppCreatePipelineEventRequestAttributes";
import { CIAppCreatePipelineEventRequestDataType } from "./CIAppCreatePipelineEventRequestDataType";

/**
 * Data of the pipeline event to create.
 */
export class CIAppCreatePipelineEventRequestData {
  /**
   * Attributes of the pipeline event to create.
   */
  "attributes"?: CIAppCreatePipelineEventRequestAttributes;
  /**
   * Type of the event.
   */
  "type"?: CIAppCreatePipelineEventRequestDataType;
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
      type: "CIAppCreatePipelineEventRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "CIAppCreatePipelineEventRequestDataType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppCreatePipelineEventRequestData.attributeTypeMap;
  }

  public constructor() {}
}
