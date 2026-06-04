/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceRepositoryInfoStatus } from "./ServiceRepositoryInfoStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
