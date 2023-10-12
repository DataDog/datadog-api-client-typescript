/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageAttributes } from "./ContainerImageAttributes";
import { ContainerImageType } from "./ContainerImageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Container Image object.
 */
export class ContainerImage {
  /**
   * Attributes for a Container Image.
   */
  "attributes"?: ContainerImageAttributes;
  /**
   * Container Image ID.
   */
  "id"?: string;
  /**
   * Type of Container Image.
   */
  "type"?: ContainerImageType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "ContainerImageAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ContainerImageType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainerImage.attributeTypeMap;
  }

  public constructor() {}
}
