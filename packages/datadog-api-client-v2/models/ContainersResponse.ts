/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerItem } from "./ContainerItem";
import { ContainerMeta } from "./ContainerMeta";
import { ContainersResponseLinks } from "./ContainersResponseLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of containers.
 */
export class ContainersResponse {
  /**
   * Array of Container objects.
   */
  "data"?: Array<ContainerItem>;
  /**
   * Pagination links.
   */
  "links"?: ContainersResponseLinks;
  /**
   * Response metadata object.
   */
  "meta"?: ContainerMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<ContainerItem>",
    },
    links: {
      baseName: "links",
      type: "ContainersResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ContainerMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainersResponse.attributeTypeMap;
  }

  public constructor() {}
}
