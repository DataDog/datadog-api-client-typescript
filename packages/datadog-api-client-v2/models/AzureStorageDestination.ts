/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureStorageDestinationType } from "./AzureStorageDestinationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `azure_storage` destination forwards logs to an Azure Blob Storage container.
 */
export class AzureStorageDestination {
  /**
   * Optional prefix for blobs written to the container.
   */
  "blobPrefix"?: string;
  /**
   * The name of the Azure Blob Storage container to store logs in.
   */
  "containerName": string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The destination type. The value should always be `azure_storage`.
   */
  "type": AzureStorageDestinationType;

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
    blobPrefix: {
      baseName: "blob_prefix",
      type: "string",
    },
    containerName: {
      baseName: "container_name",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureStorageDestinationType",
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
    return AzureStorageDestination.attributeTypeMap;
  }

  public constructor() {}
}
