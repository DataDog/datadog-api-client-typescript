import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GithubCredentials } from "./GithubCredentials";
import { GithubIntegrationType } from "./GithubIntegrationType";

/**
 * GitHub connection integration.
 */
export class GithubIntegration {
  /**
   * Supported GitHub connection credentials.
   */
  "credentials": GithubCredentials;
  /**
   * The GitHub integration type.
   */
  "type": GithubIntegrationType;
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
    credentials: {
      baseName: "credentials",
      type: "GithubCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GithubIntegrationType",
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
    return GithubIntegration.attributeTypeMap;
  }

  public constructor() {}
}
