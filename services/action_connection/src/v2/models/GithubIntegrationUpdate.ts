import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GithubCredentialsUpdate } from "./GithubCredentialsUpdate";
import { GithubIntegrationType } from "./GithubIntegrationType";

/**
 * GitHub connection integration update.
 */
export class GithubIntegrationUpdate {
  /**
   * Supported GitHub connection credentials for an update.
   */
  "credentials"?: GithubCredentialsUpdate;
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
      type: "GithubCredentialsUpdate",
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
    return GithubIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
