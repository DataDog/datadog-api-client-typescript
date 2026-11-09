/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GithubPersonalAccessTokenAccessToken } from "./GithubPersonalAccessTokenAccessToken";
import { GithubPersonalAccessTokenHostname } from "./GithubPersonalAccessTokenHostname";
import { GithubPersonalAccessTokenType } from "./GithubPersonalAccessTokenType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * GitHub personal access token credentials.
 */
export class GithubPersonalAccessToken {
  /**
   * GitHub personal access token.
   */
  "accessToken": GithubPersonalAccessTokenAccessToken;
  /**
   * Hostname of the GitHub Enterprise Server. Omit this field for github.com.
   */
  "hostname"?: GithubPersonalAccessTokenHostname;
  /**
   * The credential type for `GithubPersonalAccessToken`.
   */
  "type": GithubPersonalAccessTokenType;

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
    accessToken: {
      baseName: "access_token",
      type: "GithubPersonalAccessTokenAccessToken",
      required: true,
    },
    hostname: {
      baseName: "hostname",
      type: "GithubPersonalAccessTokenHostname",
    },
    type: {
      baseName: "type",
      type: "GithubPersonalAccessTokenType",
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
    return GithubPersonalAccessToken.attributeTypeMap;
  }

  public constructor() {}
}
