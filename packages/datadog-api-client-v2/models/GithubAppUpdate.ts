/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GithubAppType } from "./GithubAppType";
import { GithubAppUpdateGithubAppId } from "./GithubAppUpdateGithubAppId";
import { GithubAppUpdateGithubInstallationId } from "./GithubAppUpdateGithubInstallationId";
import { GithubAppUpdateHostname } from "./GithubAppUpdateHostname";
import { GithubAppUpdatePrivateKey } from "./GithubAppUpdatePrivateKey";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update to GitHub App credentials.
 */
export class GithubAppUpdate {
  /**
   * The numeric ID of the GitHub App.
   */
  "githubAppId"?: GithubAppUpdateGithubAppId;
  /**
   * The installation ID of the GitHub App.
   */
  "githubInstallationId"?: GithubAppUpdateGithubInstallationId;
  /**
   * Hostname of the GitHub Enterprise Server. Omit this field for github.com.
   */
  "hostname"?: GithubAppUpdateHostname;
  /**
   * PEM-encoded RSA private key for the GitHub App.
   */
  "privateKey"?: GithubAppUpdatePrivateKey;
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
      type: "GithubAppUpdateGithubAppId",
    },
    githubInstallationId: {
      baseName: "github_installation_id",
      type: "GithubAppUpdateGithubInstallationId",
    },
    hostname: {
      baseName: "hostname",
      type: "GithubAppUpdateHostname",
    },
    privateKey: {
      baseName: "private_key",
      type: "GithubAppUpdatePrivateKey",
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
    return GithubAppUpdate.attributeTypeMap;
  }

  public constructor() {}
}
