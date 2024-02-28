/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageItem } from "./ContainerImageItem";
import { ContainerImageMeta } from "./ContainerImageMeta";
import { ContainerImagesResponseLinks } from "./ContainerImagesResponseLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of Container Images.
 */
export class ContainerImagesResponse {
  /**
   * Array of Container Image objects.
   */
  "data"?: Array<ContainerImageItem>;
  /**
   * Pagination links.
   */
  "links"?: ContainerImagesResponseLinks;
  /**
   * Response metadata object.
   */
  "meta"?: ContainerImageMeta;

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
    data: {
      baseName: "data",
      type: "Array<ContainerImageItem>",
    },
    links: {
      baseName: "links",
      type: "ContainerImagesResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ContainerImageMeta",
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
    return ContainerImagesResponse.attributeTypeMap;
  }

  public constructor() {}
}
