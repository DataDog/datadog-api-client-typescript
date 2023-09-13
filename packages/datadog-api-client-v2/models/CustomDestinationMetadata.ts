/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metadata relevant to your configuration or recent request.
 */
export class CustomDestinationMetadata {
  /**
   * The amount of custom destinations your organization is able to create.
   */
  "customDestinationsLimit"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customDestinationsLimit: {
      baseName: "customDestinationsLimit",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationMetadata.attributeTypeMap;
  }

  public constructor() {}
}
