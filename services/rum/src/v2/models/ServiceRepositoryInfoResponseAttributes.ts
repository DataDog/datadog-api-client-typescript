import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceRepositoryInfoStatus } from "./ServiceRepositoryInfoStatus";

/**
 * Attributes of the service repository information.
 */
export class ServiceRepositoryInfoResponseAttributes {
  /**
   * The SHA of the commit associated with the service version.
   */
  "commitSha"?: string;
  /**
   * The URL of the source code repository.
   */
  "repositoryUrl"?: string;
  /**
   * The status of the service repository info lookup.
   */
  "status": ServiceRepositoryInfoStatus;
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
    commitSha: {
      baseName: "commit_sha",
      type: "string",
    },
    repositoryUrl: {
      baseName: "repository_url",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "ServiceRepositoryInfoStatus",
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
    return ServiceRepositoryInfoResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
