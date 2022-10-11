/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service code repositories.
 */
export class ServiceDefinitionV2Repo {
  /**
   * Repository name.
   */
  "name": string;
  /**
   * Repository provider.
   */
  "provider"?: string;
  /**
   * Repository URL.
   */
  "url": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    provider: {
      baseName: "provider",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Repo.attributeTypeMap;
  }

  public constructor() {}
}
