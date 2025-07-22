import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GitlabCredentialsUpdate } from "./GitlabCredentialsUpdate";
import { GitlabIntegrationType } from "./GitlabIntegrationType";

/**
 * The definition of the `GitlabIntegrationUpdate` object.
 */
export class GitlabIntegrationUpdate {
  /**
   * The definition of the `GitlabCredentialsUpdate` object.
   */
  "credentials"?: GitlabCredentialsUpdate;
  /**
   * The definition of the `GitlabIntegrationType` object.
   */
  "type": GitlabIntegrationType;
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
      type: "GitlabCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "GitlabIntegrationType",
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
    return GitlabIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
