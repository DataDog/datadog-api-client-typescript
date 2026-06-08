import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCTriageWriteRequestData } from "./IoCTriageWriteRequestData";

/**
 * Request body for creating or updating an indicator triage state.
 */
export class IoCTriageWriteRequest {
  /**
   * Data object for the triage write request.
   */
  "data": IoCTriageWriteRequestData;
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
    data: {
      baseName: "data",
      type: "IoCTriageWriteRequestData",
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
    return IoCTriageWriteRequest.attributeTypeMap;
  }

  public constructor() {}
}
