/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GithubCredentialsUpdate } from "./GithubCredentialsUpdate";
import { GithubIntegrationType } from "./GithubIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
