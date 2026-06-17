import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCTriageWriteResponseAttributes } from "./IoCTriageWriteResponseAttributes";

/**
 * Data object of the triage write response.
 */
export class IoCTriageWriteResponseData {
  /**
   * Attributes of a created or updated triage state.
   */
  "attributes"?: IoCTriageWriteResponseAttributes;
  /**
   * Unique identifier for the triage state record.
   */
  "id"?: string;
  /**
   * Triage state resource type.
   */
  "type"?: string;
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
      type: "IoCTriageWriteResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return IoCTriageWriteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
