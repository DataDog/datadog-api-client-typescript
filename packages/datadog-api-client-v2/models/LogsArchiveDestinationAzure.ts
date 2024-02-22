/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveDestinationAzureType } from "./LogsArchiveDestinationAzureType";
import { LogsArchiveIntegrationAzure } from "./LogsArchiveIntegrationAzure";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Azure archive destination.
 */
export class LogsArchiveDestinationAzure {
  /**
   * The container where the archive will be stored.
   */
  "container": string;
  /**
   * The Azure archive's integration destination.
   */
  "integration": LogsArchiveIntegrationAzure;
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
  "type": LogsArchiveDestinationAzureType;

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
    container: {
      baseName: "container",
      type: "string",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "LogsArchiveIntegrationAzure",
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
      baseName: "storage_account",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsArchiveDestinationAzureType",
      required: true,
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
    return LogsArchiveDestinationAzure.attributeTypeMap;
  }

  public constructor() {}
}
