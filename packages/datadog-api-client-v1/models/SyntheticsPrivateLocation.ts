/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsPrivateLocationMetadata } from "./SyntheticsPrivateLocationMetadata";
import { SyntheticsPrivateLocationSecrets } from "./SyntheticsPrivateLocationSecrets";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing information about the private location to create.
 */
export class SyntheticsPrivateLocation {
  /**
   * Description of the private location.
   */
  "description": string;
  /**
   * Unique identifier of the private location.
   */
  "id"?: string;
  /**
   * Object containing metadata about the private location.
   */
  "metadata"?: SyntheticsPrivateLocationMetadata;
  /**
   * Name of the private location.
   */
  "name": string;
  /**
   * Secrets for the private location. Only present in the response when creating the private location.
   */
  "secrets"?: SyntheticsPrivateLocationSecrets;
  /**
   * Array of tags attached to the private location.
   */
  "tags": Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "SyntheticsPrivateLocationMetadata",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "SyntheticsPrivateLocationSecrets",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocation.attributeTypeMap;
  }

  public constructor() {}
}
