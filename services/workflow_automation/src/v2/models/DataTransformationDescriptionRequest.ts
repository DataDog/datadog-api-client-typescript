import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class DataTransformationDescriptionRequest {
  /**
   * The fully qualified name (FQN) of the action.
   */
  "actionId": string;
  /**
   * The transformation script to describe.
   */
  "script": string;
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
    actionId: {
      baseName: "actionId",
      type: "string",
      required: true,
    },
    script: {
      baseName: "script",
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
    return DataTransformationDescriptionRequest.attributeTypeMap;
  }

  public constructor() {}
}
