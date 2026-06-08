import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCTriageWriteResponseData } from "./IoCTriageWriteResponseData";

/**
 * Response for the create indicator triage state endpoint.
 */
export class IoCTriageWriteResponse {
  /**
   * Data object of the triage write response.
   */
  "data"?: IoCTriageWriteResponseData;
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
      type: "IoCTriageWriteResponseData",
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
    return IoCTriageWriteResponse.attributeTypeMap;
  }

  public constructor() {}
}
