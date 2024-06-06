/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Metrics namespace filters
 */
export class AWSNamespacesList {
  /**
   * Exclude all namespaces
   */
  "excludeAll"?: boolean;
  /**
   * Exclude only these namespaces
   */
  "excludeOnly"?: Array<string>;
  /**
   * Include all namespaces
   */
  "includeAll"?: boolean;
  /**
   * Include only these namespaces
   */
  "includeOnly"?: Array<string>;

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
    excludeAll: {
      baseName: "exclude_all",
      type: "boolean",
    },
    excludeOnly: {
      baseName: "exclude_only",
      type: "Array<string>",
    },
    includeAll: {
      baseName: "include_all",
      type: "boolean",
    },
    includeOnly: {
      baseName: "include_only",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSNamespacesList.attributeTypeMap;
  }

  public constructor() {}
}
