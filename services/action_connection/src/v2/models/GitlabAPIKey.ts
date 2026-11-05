import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitlabAPIKeyApiToken } from "./GitlabAPIKeyApiToken";
import { GitlabAPIKeyType } from "./GitlabAPIKeyType";

/**
 * The definition of the `GitlabAPIKey` object.
 */
export class GitlabAPIKey {
  /**
   * The `GitlabAPIKey` `api_token`.
   */
  "apiToken": GitlabAPIKeyApiToken;
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
      type: "GitlabAPIKeyApiToken",
      required: true,
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
    return GitlabAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
