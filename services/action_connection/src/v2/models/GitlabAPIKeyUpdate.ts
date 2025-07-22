import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitlabAPIKeyType } from "./GitlabAPIKeyType";

/**
 * The definition of the `GitlabAPIKey` object.
 */
export class GitlabAPIKeyUpdate {
  /**
   * The `GitlabAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: string;
  /**
   * The definition of the `GitlabAPIKey` object.
   */
  "type": GitlabAPIKeyType;
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
    apiToken: {
      baseName: "api_token",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GitlabAPIKeyType",
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
    return GitlabAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
