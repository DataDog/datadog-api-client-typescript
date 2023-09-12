/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureFallbackDestinationIntegration } from "./AzureFallbackDestinationIntegration";
import { AzureFallbackDestinationType } from "./AzureFallbackDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Azure archive destination.
 */
export class AzureFallbackDestination {
  /**
   * The container where the archive will be stored.
   */
  "container": string;
  /**
   * The Azure archive's integration destination.
   */
  "integration": AzureFallbackDestinationIntegration;
  /**
   * The archive path.
   */
  "path"?: string;
  /**
   * The region where the archive will be stored.
   */
  "region"?: string;
  /**
   * The associated storage account.
   */
  "storageAccount": string;
  /**
   * Type of the Azure archive destination.
   */
  "type": AzureFallbackDestinationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    container: {
      baseName: "container",
      type: "string",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "AzureFallbackDestinationIntegration",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
    },
    storageAccount: {
      baseName: "storageAccount",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureFallbackDestinationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureFallbackDestination.attributeTypeMap;
  }

  public constructor() {}
}
