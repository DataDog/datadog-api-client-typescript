/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration settings applied to resources from the specified Azure resource provider.
 */
export class ResourceProviderConfig {
  /**
   * Collect metrics for resources from this provider.
   */
  "metricsEnabled"?: boolean;
  /**
   * The provider namespace to apply this configuration to.
   */
  "namespace"?: string;

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
    metricsEnabled: {
      baseName: "metrics_enabled",
      type: "boolean",
    },
    namespace: {
      baseName: "namespace",
      type: "string",
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
    return ResourceProviderConfig.attributeTypeMap;
  }

  public constructor() {}
}
