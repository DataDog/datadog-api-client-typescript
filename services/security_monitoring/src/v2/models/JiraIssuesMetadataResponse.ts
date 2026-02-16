import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssuesMetadataDataResponse } from "./JiraIssuesMetadataDataResponse";

export class JiraIssuesMetadataResponse {
  "data": JiraIssuesMetadataDataResponse;
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
      type: "JiraIssuesMetadataDataResponse",
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
    return JiraIssuesMetadataResponse.attributeTypeMap;
  }

  public constructor() {}
}
