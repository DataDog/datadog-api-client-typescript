import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateOnCallPageCommentRequestData } from "./CreateOnCallPageCommentRequestData";

/**
 * Request to create a comment on an On-Call Page.
 */
export class CreateOnCallPageCommentRequest {
  /**
   * Data for creating a comment on an On-Call Page.
   */
  "data": CreateOnCallPageCommentRequestData;
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
      type: "CreateOnCallPageCommentRequestData",
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
    return CreateOnCallPageCommentRequest.attributeTypeMap;
  }

  public constructor() {}
}
