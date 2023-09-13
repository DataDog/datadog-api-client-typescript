/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Azure archive's integration destination.
 */
export class AzureFallbackDestinationIntegration {
  /**
   * A client ID.
   */
  "clientId": string;
  /**
   * A tenant ID.
   */
  "tenantId": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    clientId: {
      baseName: "clientId",
      type: "string",
      required: true,
    },
    tenantId: {
      baseName: "tenantId",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureFallbackDestinationIntegration.attributeTypeMap;
  }

  public constructor() {}
}
