/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppGitHubAccountType } from "./CIAppGitHubAccountType";
import { CIAppGitHubAccountUpdateRequestAttributes } from "./CIAppGitHubAccountUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a GitHub account's CI Visibility opt-in status.
 */
export class CIAppGitHubAccountUpdateRequestData {
  /**
   * Attributes for updating a GitHub account's CI Visibility opt-in status.
   * At least one of `enabled` or `repository.enabled` must be provided.
   */
  "attributes": CIAppGitHubAccountUpdateRequestAttributes;
  /**
   * JSON:API type for the GitHub account resource.
   * The value must always be `ci_github_account`.
   */
  "type": CIAppGitHubAccountType;

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
    attributes: {
      baseName: "attributes",
      type: "CIAppGitHubAccountUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CIAppGitHubAccountType",
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
    return CIAppGitHubAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
