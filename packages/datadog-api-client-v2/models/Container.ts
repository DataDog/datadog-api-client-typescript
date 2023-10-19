/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerAttributes } from "./ContainerAttributes";
import { ContainerType } from "./ContainerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Container object.
 */
export class Container {
  /**
   * Attributes for a container.
   */
  "attributes"?: ContainerAttributes;
  /**
   * Container ID.
   */
  "id"?: string;
  /**
   * Type of container.
   */
  "type"?: ContainerType;

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
      type: "ContainerAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ContainerType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Container.attributeTypeMap;
  }

  public constructor() {}
}
