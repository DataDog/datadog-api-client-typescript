import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitlabAPIKeyType } from "./GitlabAPIKeyType";
import { GitlabAPIKeyUpdateApiToken } from "./GitlabAPIKeyUpdateApiToken";

/**
 * The definition of the `GitlabAPIKey` object.
 */
export class GitlabAPIKeyUpdate {
  /**
   * The `GitlabAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: GitlabAPIKeyUpdateApiToken;
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
      type: "GitlabAPIKeyUpdateApiToken",
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
