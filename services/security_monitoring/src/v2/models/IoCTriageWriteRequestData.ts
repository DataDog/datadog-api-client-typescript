import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCTriageWriteRequestAttributes } from "./IoCTriageWriteRequestAttributes";

/**
 * Data object for the triage write request.
 */
export class IoCTriageWriteRequestData {
  /**
   * Attributes for setting an indicator's triage state.
   */
  "attributes": IoCTriageWriteRequestAttributes;
  /**
   * Triage state resource type.
   */
  "type": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "IoCTriageWriteRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return IoCTriageWriteRequestData.attributeTypeMap;
  }

  public constructor() {}
}
