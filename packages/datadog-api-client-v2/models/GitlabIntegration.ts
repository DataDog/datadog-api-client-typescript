/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitlabCredentials } from "./GitlabCredentials";
import { GitlabIntegrationType } from "./GitlabIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `GitlabIntegration` object.
 */
export class GitlabIntegration {
  /**
   * The definition of the `GitlabCredentials` object.
   */
  "credentials": GitlabCredentials;
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
      type: "GitlabCredentials",
      required: true,
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
    return GitlabIntegration.attributeTypeMap;
  }

  public constructor() {}
}
