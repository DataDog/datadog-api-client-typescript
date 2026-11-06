/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GithubAppGithubAppId } from "./GithubAppGithubAppId";
import { GithubAppGithubInstallationId } from "./GithubAppGithubInstallationId";
import { GithubAppHostname } from "./GithubAppHostname";
import { GithubAppPrivateKey } from "./GithubAppPrivateKey";
import { GithubAppType } from "./GithubAppType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * GitHub App credentials.
 */
export class GithubApp {
  /**
   * The numeric ID of the GitHub App.
   */
  "githubAppId": GithubAppGithubAppId;
  /**
   * The installation ID of the GitHub App.
   */
  "githubInstallationId": GithubAppGithubInstallationId;
  /**
   * Hostname of the GitHub Enterprise Server. Omit this field for github.com.
   */
  "hostname"?: GithubAppHostname;
  /**
   * PEM-encoded RSA private key for the GitHub App.
   */
  "privateKey": GithubAppPrivateKey;
  /**
   * The credential type for `GithubApp`.
   */
  "type": GithubAppType;

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
    githubAppId: {
      baseName: "github_app_id",
      type: "GithubAppGithubAppId",
      required: true,
    },
    githubInstallationId: {
      baseName: "github_installation_id",
      type: "GithubAppGithubInstallationId",
      required: true,
    },
    hostname: {
      baseName: "hostname",
      type: "GithubAppHostname",
    },
    privateKey: {
      baseName: "private_key",
      type: "GithubAppPrivateKey",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GithubAppType",
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
    return GithubApp.attributeTypeMap;
  }

  public constructor() {}
}
