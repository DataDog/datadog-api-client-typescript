import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentType } from "./DORADeploymentType";

/**
 * The JSON:API data.
 */
export class DORADeploymentResponseData {
  /**
   * The ID of the received DORA deployment event.
   */
  "id": string;
  /**
   * JSON:API type for DORA deployment events.
   */
  "type"?: DORADeploymentType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORADeploymentType",
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
    return DORADeploymentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
